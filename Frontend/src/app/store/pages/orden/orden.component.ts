import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { environment } from '@env/environment';
import { WHATSAPP_NUMBER } from '@services/cart.service';
import { SeoService } from '@services/seo.service';
import { StorefrontService } from '@services/storefront.service';
import { map } from 'rxjs';
import { decodeOrder } from '../../shared/order-link';
import { PricePipe } from '../../shared/price.pipe';

/** Línea resuelta del pedido (con el precio real tomado del catálogo). */
interface OrderLine {
  slug: string;
  name: string;
  image: string | null;
  options: { type: string; value: string }[];
  price: number;
  qty: number;
  subtotal: number;
}

/**
 * Página de detalle de pedido (`/orden/:token`). El token llega en el enlace que
 * acompaña al mensaje de WhatsApp y solo contiene referencias (slug + variante +
 * cantidad). Aquí se cargan los productos reales del catálogo para mostrar el
 * pedido con precios y total auténticos: este es el valor real del pedido, no el
 * texto editable del chat. No persiste órdenes: se reconstruye desde la URL.
 */
@Component({
  selector: 'app-orden',
  imports: [RouterLink, PricePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="ord">
      <div class="ord__inner">
        <header class="ord__head">
          <span class="ord__badge">Resumen del pedido</span>
          <h1 class="ord__title">Tu Pedido</h1>
          <p class="ord__sub">
            Este es el detalle real de lo que deseas comprar. Compártelo con nosotros para confirmarlo.
          </p>
        </header>

        @if (decoded() === null) {
          <div class="ord__empty">
            <span class="ord__empty-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 8v5M12 16.5h.01M10.3 3.9l-7.6 13A2 2 0 004.4 20h15.2a2 2 0 001.7-3.1l-7.6-13a2 2 0 00-3.4 0z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </span>
            <h2>Enlace no válido</h2>
            <p>No pudimos leer este pedido. Es posible que el enlace esté incompleto.</p>
            <a class="ord__cta" routerLink="/catalogo">Ir al catálogo</a>
          </div>
        } @else if (lines().length) {
          <div class="ord__grid">
            <div class="ord__items">
              @for (line of lines(); track line.slug + line.options.length + $index) {
                <article class="oi">
                  <a class="oi__img" [routerLink]="['/producto', line.slug]">
                    @if (line.image) {
                      <img [src]="line.image" [alt]="line.name" loading="lazy" />
                    } @else {
                      <span class="oi__ph" aria-hidden="true"></span>
                    }
                    <span class="oi__qty">{{ line.qty }}</span>
                  </a>
                  <div class="oi__body">
                    <a class="oi__name" [routerLink]="['/producto', line.slug]">{{ line.name }}</a>
                    @if (line.options.length) {
                      <p class="oi__opts">
                        @for (o of line.options; track o.type) {
                          <span>{{ o.type }}: {{ o.value }}</span>
                        }
                      </p>
                    }
                    <p class="oi__unit">{{ line.price | price }} <span>c/u × {{ line.qty }}</span></p>
                  </div>
                  <span class="oi__sub">{{ line.subtotal | price }}</span>
                </article>
              }
            </div>

            <aside class="ord__summary">
              <h2 class="ord__summary-title">Resumen</h2>
              <dl class="ord__rows">
                <div>
                  <dt>Productos</dt>
                  <dd>{{ count() }}</dd>
                </div>
                <div>
                  <dt>Subtotal</dt>
                  <dd>{{ total() | price }}</dd>
                </div>
              </dl>
              <div class="ord__total">
                <span>Total</span>
                <strong>{{ total() | price }}</strong>
              </div>
              <a class="ord__wa" [href]="whatsappUrl()" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.5 20.5l1.3-4.6A8 8 0 1112 20a8 8 0 01-4-1.1l-4.5 1.6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" /></svg>
                Confirmar por WhatsApp
              </a>
              <a class="ord__back" routerLink="/catalogo">Seguir comprando</a>
              <p class="ord__note">Los precios mostrados se toman del catálogo en tiempo real.</p>
            </aside>
          </div>
        } @else if (loading()) {
          <div class="ord__items" aria-hidden="true">
            @for (s of [1, 2]; track s) {
              <article class="oi oi--sk">
                <span class="ord__sk oi__img"></span>
                <div class="oi__body">
                  <span class="ord__sk" style="width:60%;height:18px"></span>
                  <span class="ord__sk" style="width:35%;height:14px;margin-top:10px"></span>
                </div>
              </article>
            }
          </div>
        } @else {
          <div class="ord__empty">
            <span class="ord__empty-ic" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M6 2l-2 4v14a2 2 0 002 2h12a2 2 0 002-2V6l-2-4H6z" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round" /><path d="M4 6h16M16 10a4 4 0 01-8 0" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </span>
            <h2>Pedido no disponible</h2>
            <p>Los productos de este pedido ya no están disponibles.</p>
            <a class="ord__cta" routerLink="/catalogo">Ir al catálogo</a>
          </div>
        }
      </div>
    </section>
  `,
  styleUrl: './orden.component.scss',
})
export class OrdenComponent {
  private readonly storefront = inject(StorefrontService);
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  readonly token = toSignal(this.route.paramMap.pipe(map((p) => p.get('token') ?? '')), {
    initialValue: this.route.snapshot.paramMap.get('token') ?? '',
  });

  /** Referencias del pedido decodificadas (`null` si el token es inválido). */
  readonly decoded = computed(() => decodeOrder(this.token()));

  /** Líneas resueltas contra el catálogo (se omiten productos que ya no existen). */
  readonly lines = computed<OrderLine[]>(() => {
    const items = this.decoded();
    if (!items) {
      return [];
    }
    const out: OrderLine[] = [];
    for (const it of items) {
      const product = this.storefront.product(it.slug)();
      if (!product) {
        continue;
      }
      const variant =
        product.variants.find((v) => v.id === it.variantId) ??
        (product.hasVariants ? undefined : product.variants[0]);
      if (!variant) {
        continue;
      }
      const image = product.images[0]?.thumbnailUrl ?? product.images[0]?.url ?? null;
      out.push({
        slug: product.slug,
        name: product.name,
        image,
        options: variant.options.map((o) => ({ type: o.optionType, value: o.value })),
        price: variant.price,
        qty: it.qty,
        subtotal: variant.price * it.qty,
      });
    }
    return out;
  });

  readonly count = computed(() => this.lines().reduce((n, l) => n + l.qty, 0));
  readonly total = computed(() => this.lines().reduce((s, l) => s + l.subtotal, 0));

  /** `true` mientras algún producto del pedido aún no ha terminado de cargar. */
  readonly loading = computed(() => {
    const items = this.decoded();
    if (!items) {
      return false;
    }
    return [...new Set(items.map((i) => i.slug))].some(
      (slug) => !this.storefront.productSettled(slug)(),
    );
  });

  /** Enlace de WhatsApp para confirmar este mismo pedido (adjunta esta URL). */
  readonly whatsappUrl = computed(() => {
    const lines = this.lines();
    const orderUrl = `${environment.url_site.replace(/\/+$/, '')}/orden/${this.token()}`;
    const list = lines
      .map((l) => {
        const opts = l.options.map((o) => `${o.type}: ${o.value}`).join(', ');
        return `• ${l.name}${opts ? ` (${opts})` : ''} x${l.qty}`;
      })
      .join('\n');
    const msg = `Hola EMPRM, confirmo este pedido:\n\n${list}\n\nDetalle y total:\n${orderUrl}`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  });

  constructor() {
    this.seo.update({
      title: 'Tu pedido · EMPRM',
      description: 'Detalle de tu pedido en EMPRM.',
      noindex: true,
      image: null,
    });

    // Carga (SWR) los productos del pedido en cuanto cambia el token.
    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((p) => {
      const items = decodeOrder(p.get('token') ?? '');
      if (items) {
        new Set(items.map((i) => i.slug)).forEach((slug) => this.storefront.loadProduct(slug));
      }
    });
  }
}
