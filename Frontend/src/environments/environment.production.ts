export const environment = {
  production: true,
  // 1 sola app: API y tienda comparten dominio (emprm.store). Las URLs son
  // absolutas porque el SSR (Node) las usa para hacer fetch durante el render.
  // ⚠️ El path debe coincidir con API_PREFIX del backend (.env -> API_PREFIX=api).
  url_base: 'https://emprm.store',
  url_api: 'https://emprm.store/api',
  // Dominio público de la tienda (para canonical / Open Graph / sitemap).
  url_site: 'https://emprm.store',
};
