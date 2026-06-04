import { RenderMode, ServerRoute } from '@angular/ssr';

/**
 * Modo de render por ruta:
 *  - auth y panel de administración -> Client (SPA, detrás de login, sin SSR).
 *  - el resto (futuros módulos públicos: tienda, productos, etc.) -> Server (SSR).
 *
 * Añade aquí rutas públicas con RenderMode.Server o RenderMode.Prerender.
 */
export const serverRoutes: ServerRoute[] = [
  { path: 'auth', renderMode: RenderMode.Client },
  { path: 'auth/**', renderMode: RenderMode.Client },
  { path: '', renderMode: RenderMode.Client },
  { path: 'profile', renderMode: RenderMode.Client },
  { path: 'users', renderMode: RenderMode.Client },
  { path: 'categories', renderMode: RenderMode.Client },
  { path: 'categories/**', renderMode: RenderMode.Client },
  { path: 'media', renderMode: RenderMode.Client },
  { path: 'products', renderMode: RenderMode.Client },
  { path: 'products/**', renderMode: RenderMode.Client },
  { path: 'import', renderMode: RenderMode.Client },
  { path: 'import/**', renderMode: RenderMode.Client },
  { path: '**', renderMode: RenderMode.Server },
];
