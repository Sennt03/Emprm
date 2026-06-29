/** Configuración compartida de la tienda pública. */

/** Banner principal (home + páginas internas). */
export const HERO_IMAGE = '/img/banner-home.jpg';

/** Banner exclusivo de la página Catálogo. */
export const HERO_CATALOGO_IMAGE = '/img/banner-catalogo.jpg';

export interface StoreNavLink {
  label: string;
  link: string;
}

/** Navegación principal (header + footer). Fuente única de verdad. */
export const STORE_NAV: StoreNavLink[] = [
  { label: 'Inicio', link: '/' },
  { label: 'Catálogo', link: '/catalogo' },
  { label: 'Historia', link: '/historia' },
  { label: 'Reseñas', link: '/resenas' },
  { label: 'Redes', link: '/redes' },
  { label: 'Tiendas', link: '/tiendas' },
];
