import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  Injectable,
  PLATFORM_ID,
  Signal,
  StateKey,
  TransferState,
  WritableSignal,
  inject,
  makeStateKey,
  signal,
} from '@angular/core';
import { environment } from '@env/environment';
import { ApiResponse } from '@models/api.models';
import { StoreCatalog, StoreCategoryDetail, StoreHome, StoreProduct } from '@models/storefront.models';
import { EMPTY, catchError, finalize, map, timeout } from 'rxjs';

const CACHE_PREFIX = 'emprm_sf_';

/** Recurso reactivo con estado de carga (data + settled). */
interface Resource<T> {
  data: WritableSignal<T | null>;
  settled: WritableSignal<boolean>;
  seeded: boolean;
}

/**
 * Servicio de datos de la tienda pública con estrategia **stale-while-revalidate**
 * para SSR. En el servidor consulta la API, renderiza y serializa en `TransferState`;
 * en el cliente hidrata sin parpadeo (TransferState o `localStorage`) y revalida en
 * segundo plano, repintando solo si cambió. Resiliente ante fallos de la API.
 *
 * Recursos por clave (categoría/producto por slug) memoizados en mapas.
 */
@Injectable({ providedIn: 'root' })
export class StorefrontService {
  private readonly http = inject(HttpClient);
  private readonly state = inject(TransferState);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
  private readonly baseUrl = this.resolveBaseUrl();

  /**
   * URL base de la API de tienda.
   * - Navegador (y dev): la URL pública configurada.
   * - SSR en producción: **loopback interno** `http://127.0.0.1:PORT/api`. El SSR
   *   corre en el MISMO proceso Node que la API, así que llamarse por el dominio
   *   público obligaría a salir y volver por el proxy/TLS de Hostinger (sobrecoste
   *   y riesgo de cuelgue del propio render esperándose a sí mismo). El loopback
   *   lo evita.
   */
  private resolveBaseUrl(): string {
    if (this.isBrowser || !environment.production) {
      return `${environment.url_api}/storefront`;
    }
    const proc = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
    // Válvula de escape: si el loopback 127.0.0.1:PORT no fuese alcanzable en este
    // host (p.ej. Passenger con socket), define SSR_API_BASE en el .env del
    // servidor (ej. https://emprm.store/api) sin recompilar.
    const override = proc?.env?.['SSR_API_BASE'];
    if (override) {
      return `${override.replace(/\/+$/, '')}/storefront`;
    }
    const port = proc?.env?.['PORT'] ?? '3000';
    const apiPath = new URL(environment.url_api).pathname.replace(/\/+$/, ''); // p.ej. '/api'
    return `http://127.0.0.1:${port}${apiPath}/storefront`;
  }

  private readonly homeRes = this.make<StoreHome>();
  private readonly catalogRes = this.make<StoreCatalog>();
  private readonly categoryRes = new Map<string, Resource<StoreCategoryDetail>>();
  private readonly productRes = new Map<string, Resource<StoreProduct>>();

  // ----------------------------- portada -----------------------------
  readonly home: Signal<StoreHome | null> = this.homeRes.data.asReadonly();
  loadHome(): void {
    this.swr('home', this.homeRes, '/home');
  }

  // ----------------------------- catálogo -----------------------------
  readonly catalog: Signal<StoreCatalog | null> = this.catalogRes.data.asReadonly();
  loadCatalog(): void {
    this.swr('catalog', this.catalogRes, '/catalog');
  }

  // ----------------------------- categoría -----------------------------
  category(slug: string): Signal<StoreCategoryDetail | null> {
    return this.ensure(this.categoryRes, slug).data;
  }
  categorySettled(slug: string): Signal<boolean> {
    return this.ensure(this.categoryRes, slug).settled;
  }
  loadCategory(slug: string): void {
    this.swr(`category:${slug}`, this.ensure(this.categoryRes, slug), `/categories/${slug}`);
  }

  // ----------------------------- producto -----------------------------
  product(slug: string): Signal<StoreProduct | null> {
    return this.ensure(this.productRes, slug).data;
  }
  productSettled(slug: string): Signal<boolean> {
    return this.ensure(this.productRes, slug).settled;
  }
  loadProduct(slug: string): void {
    this.swr(`product:${slug}`, this.ensure(this.productRes, slug), `/products/${slug}`);
  }

  // ----------------------------- núcleo SWR -----------------------------

  private swr<T>(name: string, res: Resource<T>, path: string): void {
    const key = makeStateKey<T>(`sf-${name}`);

    // 1) Siembra una sola vez (cliente): estado transferido del SSR o caché local.
    if (this.isBrowser && !res.seeded) {
      res.seeded = true;
      if (this.state.hasKey(key)) {
        const transferred = this.state.get(key, null as unknown as T);
        if (transferred) {
          res.data.set(transferred);
          this.writeCache(name, transferred);
        }
        this.state.remove(key);
      } else {
        const cached = this.readCache<T>(name);
        if (cached) {
          res.data.set(cached);
        }
      }
    }

    // 2) Revalida contra la API (en SSR para el render; en cliente, en segundo plano).
    this.http
      .get<ApiResponse<T>>(`${this.baseUrl}${path}`)
      .pipe(
        // Corta un fetch lento para que el render SSR no quede colgado reteniendo
        // RAM; al fallar, catchError conserva lo ya sembrado (TransferState/caché).
        timeout({ each: 8000 }),
        map((r) => r.data),
        catchError(() => EMPTY), // resiliencia: conserva lo sembrado si la API falla.
        finalize(() => res.settled.set(true)),
      )
      .subscribe((data) => {
        if (!this.isBrowser) {
          res.data.set(data);
          this.state.set(key, data);
          return;
        }
        if (!this.equal(res.data(), data)) {
          res.data.set(data);
        }
        this.writeCache(name, data);
      });
  }

  // ----------------------------- helpers -----------------------------

  private make<T>(): Resource<T> {
    return { data: signal<T | null>(null), settled: signal(false), seeded: false };
  }

  private ensure<T>(store: Map<string, Resource<T>>, slug: string): Resource<T> {
    let res = store.get(slug);
    if (!res) {
      res = this.make<T>();
      store.set(slug, res);
    }
    return res;
  }

  private equal<T>(a: T | null, b: T): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
  }

  private readCache<T>(name: string): T | null {
    try {
      const raw = localStorage.getItem(CACHE_PREFIX + name);
      return raw ? (JSON.parse(raw) as T) : null;
    } catch {
      return null;
    }
  }

  private writeCache<T>(name: string, data: T): void {
    try {
      localStorage.setItem(CACHE_PREFIX + name, JSON.stringify(data));
    } catch {
      /* almacenamiento no disponible: se ignora. */
    }
  }
}
