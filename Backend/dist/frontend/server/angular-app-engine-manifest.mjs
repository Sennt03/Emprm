
export default {
  basePath: '/',
  allowedHosts: [
  "localhost",
  "emprm.store",
  "www.emprm.store"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
