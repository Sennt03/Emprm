import { Injectable } from '@nestjs/common';
import { CategoryStatus, Prisma, ProductStatus } from '@prisma/client';
import { PrismaService } from '../../database/prisma/prisma.service';

/** Máximo de colecciones en la portada (el resto se verá en la pestaña de catálogo). */
const COLLECTIONS_LIMIT = 3;

/** Tope de productos destacados en la portada (evita serializar el catálogo entero). */
const FEATURED_LIMIT = 60;

/** Tope de productos por página de categoría (sin esto, una categoría grande carga
 *  todo el catálogo en RAM y lo serializa en el HTML; era una fuente de OOM/IOPS). */
const CATEGORY_PRODUCTS_LIMIT = 200;

/** TTL de la caché en memoria de la tienda. Las lecturas repetidas (SSR, crawlers,
 *  revalidación del navegador) golpean memoria en vez de MySQL, lo que baja el IOPS
 *  y la RAM. 60 s = los cambios del admin se ven como muy tarde en 1 min. */
const CACHE_TTL_MS = 60_000;

/** TTL corto para respuestas "no encontrado" (null). Si el admin acaba de activar
 *  o crear una entidad, debe verse casi al instante en vez de esperar el TTL
 *  completo. Sin esto, pedir el slug de un producto/categoría aún inactivo lo
 *  dejaba memoizado como "no encontrado" hasta 60 s (se veía como "Categoría no
 *  encontrada" un rato después de activarla). Seguimos protegiendo de avalanchas. */
const NEGATIVE_CACHE_TTL_MS = 5_000;

/** Tarjeta de producto para la tienda pública (NUNCA incluye costPrice). */
export interface StoreProductCard {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  imageUrl: string | null;
  thumbnailUrl: string | null;
  imageAlt: string | null;
  price: number | null;
  comparePrice: number | null;
  inStock: boolean;
  /** Colores (hex) de las variantes, para pintar los puntos de color en la tarjeta. */
  colors: string[];
  categoryName: string | null;
  createdAt: string;
}

/** Tarjeta de colección (categoría) para la portada y el catálogo. */
export interface StoreCollection {
  name: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  imageAlt: string | null;
  productCount: number;
  metaTitle: string | null;
  metaDescription: string | null;
}

export interface StoreHomePayload {
  collections: StoreCollection[];
  featuredProducts: StoreProductCard[];
}

export interface StoreCatalogPayload {
  categories: StoreCollection[];
}

export interface StoreCategoryDetail extends StoreCollection {
  products: StoreProductCard[];
}

export interface StoreProductVariant {
  id: string;
  sku: string | null;
  price: number;
  comparePrice: number | null;
  stock: number;
  stockPolicy: string;
  color: string | null;
  isDefault: boolean;
  options: { optionType: string; value: string }[];
}

export interface StoreProductDetail {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  shortDescription: string | null;
  hasVariants: boolean;
  metaTitle: string | null;
  metaDescription: string | null;
  categories: { name: string; slug: string }[];
  images: { url: string; thumbnailUrl: string | null; altText: string | null }[];
  optionTypes: { name: string; values: string[] }[];
  variants: StoreProductVariant[];
}

export interface StoreSitemap {
  products: { slug: string; updatedAt: string }[];
  categories: { slug: string; updatedAt: string }[];
}

const CARD_INCLUDE = {
  categories: { select: { name: true }, take: 1 },
  images: {
    take: 1,
    orderBy: [{ isCover: 'desc' }, { sortOrder: 'asc' }],
    select: {
      altText: true,
      asset: { select: { url: true, thumbnailUrl: true } },
    },
  },
  variants: {
    where: { active: true },
    orderBy: { sortOrder: 'asc' },
    select: {
      price: true,
      comparePrice: true,
      stock: true,
      stockPolicy: true,
      isDefault: true,
      color: true,
    },
  },
} satisfies Prisma.ProductInclude;

const DETAIL_INCLUDE = {
  categories: { select: { name: true, slug: true } },
  images: {
    orderBy: [{ isCover: 'desc' }, { sortOrder: 'asc' }],
    select: { altText: true, asset: { select: { url: true, thumbnailUrl: true } } },
  },
  optionTypes: {
    orderBy: { sortOrder: 'asc' },
    include: { values: { orderBy: { sortOrder: 'asc' } } },
  },
  variants: {
    where: { active: true },
    orderBy: { sortOrder: 'asc' },
    include: { options: { include: { optionValue: { include: { optionType: true } } } } },
  },
} satisfies Prisma.ProductInclude;

type ProductCardRow = Prisma.ProductGetPayload<{ include: typeof CARD_INCLUDE }>;
type ProductDetailRow = Prisma.ProductGetPayload<{ include: typeof DETAIL_INCLUDE }>;

const COLLECTION_SELECT = {
  name: true,
  slug: true,
  description: true,
  imageUrl: true,
  imageAlt: true,
  metaTitle: true,
  metaDescription: true,
  _count: { select: { products: true } },
} satisfies Prisma.CategorySelect;

type CollectionRow = Prisma.CategoryGetPayload<{ select: typeof COLLECTION_SELECT }>;

/**
 * Servicio de solo lectura para la tienda pública. Expone datos seguros
 * (sin costPrice, solo entidades `active`) optimizados para SSR.
 */
@Injectable()
export class StorefrontService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Caché en memoria con TTL. Memoiza también la promesa en vuelo, así varias
   * peticiones simultáneas (típico de crawlers) comparten una sola consulta a
   * MySQL en vez de dispararla N veces. Es lo que corta el IOPS y los picos de RAM.
   */
  private readonly cache = new Map<string, { expires: number; value: Promise<unknown> }>();

  private cached<T>(key: string, producer: () => Promise<T>): Promise<T> {
    const now = Date.now();
    const hit = this.cache.get(key);
    if (hit && hit.expires > now) {
      return hit.value as Promise<T>;
    }
    // Poda: las claves son por slug; un crawler pidiendo miles de slugs distintos
    // podría hinchar el Map. Si crece, barremos las entradas ya caducadas.
    if (this.cache.size > 500) {
      for (const [k, v] of this.cache) {
        if (v.expires <= now) this.cache.delete(k);
      }
    }
    const entry: { expires: number; value: Promise<unknown> } = {
      expires: now + CACHE_TTL_MS,
      value: undefined as unknown as Promise<unknown>,
    };
    entry.value = producer()
      .then((result) => {
        // "No encontrado" (null) se memoiza solo unos segundos: activar/crear una
        // entidad se refleja casi al instante. Mientras la promesa está en vuelo
        // sigue compartida (expira a 60 s), así que la protección de avalanchas
        // se mantiene.
        if (result == null) {
          entry.expires = Date.now() + NEGATIVE_CACHE_TTL_MS;
        }
        return result;
      })
      .catch((err) => {
        this.cache.delete(key); // no cachees un fallo: deja reintentar en la próxima
        throw err;
      });
    this.cache.set(key, entry);
    return entry.value as Promise<T>;
  }

  /** Portada: colecciones destacadas (máx 3) + productos destacados. */
  getHome(): Promise<StoreHomePayload> {
    return this.cached('home', () => this.fetchHome());
  }

  private async fetchHome(): Promise<StoreHomePayload> {
    const [collections, products] = await Promise.all([
      this.prisma.category.findMany({
        where: { status: CategoryStatus.active, imageUrl: { not: null } },
        orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
        take: COLLECTIONS_LIMIT,
        select: COLLECTION_SELECT,
      }),
      this.prisma.product.findMany({
        where: { status: ProductStatus.active, featured: true },
        orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
        take: FEATURED_LIMIT,
        include: CARD_INCLUDE,
      }),
    ]);

    return {
      collections: collections.map((c) => this.toCollection(c)),
      featuredProducts: products.map((p) => this.toCard(p)),
    };
  }

  /** Catálogo: TODAS las categorías activas. */
  getCatalog(): Promise<StoreCatalogPayload> {
    return this.cached('catalog', () => this.fetchCatalog());
  }

  private async fetchCatalog(): Promise<StoreCatalogPayload> {
    const categories = await this.prisma.category.findMany({
      where: { status: CategoryStatus.active },
      orderBy: [{ sortOrder: 'asc' }, { name: 'asc' }],
      select: COLLECTION_SELECT,
    });
    return { categories: categories.map((c) => this.toCollection(c)) };
  }

  /** Detalle de categoría + sus productos activos (incluye subcategorías). */
  getCategory(slug: string): Promise<StoreCategoryDetail | null> {
    return this.cached(`category:${slug}`, () => this.fetchCategory(slug));
  }

  private async fetchCategory(slug: string): Promise<StoreCategoryDetail | null> {
    const cat = await this.prisma.category.findFirst({
      where: { slug, status: CategoryStatus.active },
      select: { ...COLLECTION_SELECT, id: true },
    });
    if (!cat) {
      return null;
    }

    const categoryIds = await this.activeCategoryAndDescendants(cat.id);
    const products = await this.prisma.product.findMany({
      where: {
        status: ProductStatus.active,
        categories: { some: { id: { in: categoryIds } } },
      },
      orderBy: [{ sortOrder: 'asc' }, { createdAt: 'desc' }],
      take: CATEGORY_PRODUCTS_LIMIT,
      include: CARD_INCLUDE,
    });

    return {
      ...this.toCollection(cat),
      productCount: products.length,
      products: products.map((p) => this.toCard(p)),
    };
  }

  /** Detalle público de un producto (con todas sus variantes; sin costPrice). */
  getProduct(slug: string): Promise<StoreProductDetail | null> {
    return this.cached(`product:${slug}`, () => this.fetchProduct(slug));
  }

  private async fetchProduct(slug: string): Promise<StoreProductDetail | null> {
    const product = await this.prisma.product.findFirst({
      where: { slug, status: ProductStatus.active },
      include: DETAIL_INCLUDE,
    });
    if (!product) {
      return null;
    }
    return this.toDetail(product);
  }

  /** Slugs activos (producto + categoría) con su fecha, para el sitemap.xml. */
  getSitemap(): Promise<StoreSitemap> {
    return this.cached('sitemap', () => this.fetchSitemap());
  }

  private async fetchSitemap(): Promise<StoreSitemap> {
    const [products, categories] = await Promise.all([
      this.prisma.product.findMany({
        where: { status: ProductStatus.active },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' },
      }),
      this.prisma.category.findMany({
        where: { status: CategoryStatus.active },
        select: { slug: true, updatedAt: true },
        orderBy: { updatedAt: 'desc' },
      }),
    ]);
    return {
      products: products.map((p) => ({ slug: p.slug, updatedAt: p.updatedAt.toISOString() })),
      categories: categories.map((c) => ({ slug: c.slug, updatedAt: c.updatedAt.toISOString() })),
    };
  }

  // ----------------------------- helpers -----------------------------

  /** IDs de la categoría y todas sus descendientes activas. */
  private async activeCategoryAndDescendants(rootId: string): Promise<string[]> {
    const all = await this.prisma.category.findMany({
      where: { status: CategoryStatus.active },
      select: { id: true, parentId: true },
    });
    const childrenOf = new Map<string, string[]>();
    for (const c of all) {
      if (c.parentId) {
        const list = childrenOf.get(c.parentId) ?? [];
        list.push(c.id);
        childrenOf.set(c.parentId, list);
      }
    }
    const ids: string[] = [rootId];
    const stack = [rootId];
    while (stack.length) {
      const cur = stack.pop()!;
      for (const child of childrenOf.get(cur) ?? []) {
        ids.push(child);
        stack.push(child);
      }
    }
    return ids;
  }

  // ----------------------------- mapeo -----------------------------

  private toCollection(c: CollectionRow): StoreCollection {
    return {
      name: c.name,
      slug: c.slug,
      description: c.description,
      imageUrl: c.imageUrl,
      imageAlt: c.imageAlt,
      productCount: c._count.products,
      metaTitle: c.metaTitle,
      metaDescription: c.metaDescription,
    };
  }

  private toCard(p: ProductCardRow): StoreProductCard {
    const defaultVariant = p.variants.find((v) => v.isDefault) ?? p.variants[0];
    const price = defaultVariant ? Number(defaultVariant.price) : null;
    const compareRaw =
      defaultVariant?.comparePrice != null ? Number(defaultVariant.comparePrice) : null;
    const comparePrice =
      compareRaw != null && price != null && compareRaw > price ? compareRaw : null;
    const inStock = p.variants.some((v) => v.stock > 0 || v.stockPolicy === 'allow');
    const colors = [
      ...new Set(p.variants.map((v) => v.color).filter((c): c is string => !!c)),
    ];
    const cover = p.images[0];

    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      shortDescription: p.shortDescription,
      imageUrl: cover?.asset.url ?? null,
      thumbnailUrl: cover?.asset.thumbnailUrl ?? cover?.asset.url ?? null,
      imageAlt: cover?.altText ?? p.name,
      price,
      comparePrice,
      inStock,
      colors,
      categoryName: p.categories[0]?.name ?? null,
      createdAt: p.createdAt.toISOString(),
    };
  }

  private toDetail(p: ProductDetailRow): StoreProductDetail {
    return {
      id: p.id,
      name: p.name,
      slug: p.slug,
      description: p.description,
      shortDescription: p.shortDescription,
      hasVariants: p.hasVariants,
      metaTitle: p.metaTitle,
      metaDescription: p.metaDescription,
      categories: p.categories.map((c) => ({ name: c.name, slug: c.slug })),
      images: p.images.map((img) => ({
        url: img.asset.url,
        thumbnailUrl: img.asset.thumbnailUrl,
        altText: img.altText,
      })),
      optionTypes: p.optionTypes.map((ot) => ({
        name: ot.name,
        values: ot.values.map((v) => v.value),
      })),
      variants: p.variants.map((v) => {
        const price = Number(v.price);
        const compareRaw = v.comparePrice != null ? Number(v.comparePrice) : null;
        return {
          id: v.id,
          sku: v.sku,
          price,
          comparePrice: compareRaw != null && compareRaw > price ? compareRaw : null,
          stock: v.stock,
          stockPolicy: v.stockPolicy,
          color: v.color,
          isDefault: v.isDefault,
          options: v.options.map((o) => ({
            optionType: o.optionValue.optionType.name,
            value: o.optionValue.value,
          })),
        };
      }),
    };
  }
}
