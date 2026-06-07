import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { environment } from './environments/environment';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

// Respeta X-Forwarded-Proto/Host detrás de un proxy (para construir URLs absolutas).
app.set('trust proxy', true);

/**
 * sitemap.xml dinámico: combina las rutas estáticas con los slugs activos de
 * categorías y productos (consultados a la API pública del catálogo).
 */
app.get('/sitemap.xml', async (req, res, next) => {
  try {
    const base = `${req.protocol}://${req.get('host')}`;
    const response = await fetch(`${environment.url_api}/storefront/sitemap`);
    const json = (await response.json()) as {
      data: {
        products: { slug: string; updatedAt: string }[];
        categories: { slug: string; updatedAt: string }[];
      };
    };
    const staticPaths = ['/', '/catalogo', '/historia', '/resenas', '/redes', '/tiendas'];
    const entries: { loc: string; lastmod?: string }[] = [
      ...staticPaths.map((p) => ({ loc: base + p })),
      ...json.data.categories.map((c) => ({
        loc: `${base}/categoria/${c.slug}`,
        lastmod: c.updatedAt,
      })),
      ...json.data.products.map((p) => ({ loc: `${base}/producto/${p.slug}`, lastmod: p.updatedAt })),
    ];
    const xml =
      '<?xml version="1.0" encoding="UTF-8"?>\n' +
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      entries
        .map(
          (e) =>
            `  <url><loc>${e.loc}</loc>${e.lastmod ? `<lastmod>${e.lastmod}</lastmod>` : ''}</url>`,
        )
        .join('\n') +
      '\n</urlset>\n';
    res.set('Content-Type', 'application/xml').send(xml);
  } catch {
    next();
  }
});

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
