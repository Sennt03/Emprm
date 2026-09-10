
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2WASRV7M.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2WASRV7M.js",
      "chunk-OSFJ3AOZ.js",
      "chunk-KX72R65T.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-2WASRV7M.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth/**"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js"
    ],
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-GHYZJHLR.js",
      "chunk-FV5K3ZJC.js"
    ],
    "route": "/panel/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-4ERNSHRD.js",
      "chunk-FV5K3ZJC.js",
      "chunk-CP3PK7UH.js",
      "chunk-G3TGYHCS.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-ZOCGRDQL.js",
      "chunk-JXJHMQBP.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-CP3PK7UH.js",
      "chunk-G3TGYHCS.js"
    ],
    "route": "/panel/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-YFUNEF3E.js",
      "chunk-LC4FGHOE.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/categories/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-6ZXM2E7L.js",
      "chunk-5J5K3S7Q.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/media"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-3KH532B7.js",
      "chunk-4GILORHF.js",
      "chunk-QULAZEPS.js",
      "chunk-QL5IHC6Z.js",
      "chunk-CP3PK7UH.js",
      "chunk-G3TGYHCS.js"
    ],
    "route": "/panel/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-6XYV4ICK.js",
      "chunk-QULAZEPS.js",
      "chunk-JXJHMQBP.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-YFUNEF3E.js",
      "chunk-LC4FGHOE.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-77PUSJQ6.js",
      "chunk-LC4FGHOE.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/images/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-6XYV4ICK.js",
      "chunk-QULAZEPS.js",
      "chunk-JXJHMQBP.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-BY6WO2Z4.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js"
    ],
    "route": "/panel/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-AUZY4AHH.js",
      "chunk-LC4FGHOE.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-G3TGYHCS.js"
    ],
    "route": "/panel/import/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js",
      "chunk-D2BQSSAO.js",
      "chunk-LC4FGHOE.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-G3TGYHCS.js"
    ],
    "route": "/panel/import/jobs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4YOYZHAM.js",
      "chunk-UO7VFFY4.js",
      "chunk-M7BNOOVY.js",
      "chunk-EJNHXCK7.js"
    ],
    "redirectTo": "/panel",
    "route": "/panel/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-SUTMNIGI.js",
      "chunk-UCM6TQZJ.js",
      "chunk-EXZUYHEF.js",
      "chunk-ZOP32JGP.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-JHA7SSKW.js",
      "chunk-STJE2KCJ.js",
      "chunk-EXZUYHEF.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/categoria/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-DNO3XPK2.js",
      "chunk-EXZUYHEF.js"
    ],
    "route": "/producto/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-EN2AHMS4.js",
      "chunk-EXZUYHEF.js"
    ],
    "route": "/orden/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-ZWAAYGXI.js",
      "chunk-3JYRHSNX.js",
      "chunk-ZOP32JGP.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-BOLDEIUE.js",
      "chunk-3JYRHSNX.js",
      "chunk-ZOP32JGP.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-FQOSOKKZ.js",
      "chunk-ZOP32JGP.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-GLWVBDDY.js",
      "chunk-ZOP32JGP.js",
      "chunk-EJNHXCK7.js"
    ],
    "route": "/datos-envio"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-6FKUL4WJ.js",
      "chunk-ZOP32JGP.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-22ETIATT.js",
      "chunk-ZTR753QE.js",
      "chunk-HDMQC6DV.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js"
    ],
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23229, hash: '2d048f9f979a89be097a3d5696c89c14018701566daef1916d2a6cf52ed20b49', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15349, hash: 'bd521201b358430d9e5a9c1455f71bb27e6b367a36b651121c66e16278b0cca9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AFAMJ2SG.css': {size: 9589, hash: '0Pw1iMQAL/4', text: () => import('./assets-chunks/styles-AFAMJ2SG_css.mjs').then(m => m.default)}
  },
};
