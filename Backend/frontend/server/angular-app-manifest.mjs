
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W4WJUICJ.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W4WJUICJ.js",
      "chunk-R32V2AOO.js",
      "chunk-JWUCJVUW.js",
      "chunk-ZAH7PO7R.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-W4WJUICJ.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth/**"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js"
    ],
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-5VBEW37O.js",
      "chunk-CXEGOF6I.js"
    ],
    "route": "/panel/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-6QMTB7RF.js",
      "chunk-CXEGOF6I.js",
      "chunk-DD2TCODC.js",
      "chunk-5DIWNJSC.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-QF5V2IZN.js",
      "chunk-53DZ7XSI.js",
      "chunk-CRPWUY64.js",
      "chunk-64XTSD6S.js",
      "chunk-DD2TCODC.js",
      "chunk-5DIWNJSC.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-XU3KY5ZB.js",
      "chunk-QEGUL4RV.js",
      "chunk-LQCJWDTU.js",
      "chunk-2A7PH7EL.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/categories/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-5GFUHTS2.js",
      "chunk-CRPWUY64.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/media"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-NCZ2HL3H.js",
      "chunk-2QE3DGT4.js",
      "chunk-64XTSD6S.js",
      "chunk-DD2TCODC.js",
      "chunk-5DIWNJSC.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-CKDQXOYT.js",
      "chunk-2QE3DGT4.js",
      "chunk-53DZ7XSI.js",
      "chunk-CRPWUY64.js",
      "chunk-64XTSD6S.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/products/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-XU3KY5ZB.js",
      "chunk-QEGUL4RV.js",
      "chunk-LQCJWDTU.js",
      "chunk-2A7PH7EL.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/products/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-VB7MNDLF.js",
      "chunk-QEGUL4RV.js",
      "chunk-2A7PH7EL.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/products/images/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-CKDQXOYT.js",
      "chunk-2QE3DGT4.js",
      "chunk-53DZ7XSI.js",
      "chunk-CRPWUY64.js",
      "chunk-64XTSD6S.js",
      "chunk-JWUCJVUW.js"
    ],
    "route": "/panel/products/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-Y2IZHBG3.js",
      "chunk-LQCJWDTU.js",
      "chunk-2A7PH7EL.js"
    ],
    "route": "/panel/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-26VKHFSB.js",
      "chunk-QEGUL4RV.js",
      "chunk-LQCJWDTU.js",
      "chunk-2A7PH7EL.js",
      "chunk-5DIWNJSC.js"
    ],
    "route": "/panel/import/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js",
      "chunk-WLQUA32I.js",
      "chunk-QEGUL4RV.js",
      "chunk-LQCJWDTU.js",
      "chunk-2A7PH7EL.js",
      "chunk-5DIWNJSC.js"
    ],
    "route": "/panel/import/jobs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-MSLNOVWT.js",
      "chunk-NCDDPRO4.js",
      "chunk-ZAH7PO7R.js"
    ],
    "redirectTo": "/panel",
    "route": "/panel/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-RE2MIPXA.js",
      "chunk-3QURZ7AZ.js",
      "chunk-ADTMC64D.js",
      "chunk-ZYGKC5SE.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-MCJEP2QK.js",
      "chunk-FBA6XXHE.js",
      "chunk-ADTMC64D.js",
      "chunk-IQGVCYTI.js"
    ],
    "route": "/categoria/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-DFY5RK2O.js",
      "chunk-ADTMC64D.js"
    ],
    "route": "/producto/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-FML2L55A.js",
      "chunk-LIT5MJCD.js",
      "chunk-ZYGKC5SE.js",
      "chunk-IQGVCYTI.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-FPGVE3Q6.js",
      "chunk-LIT5MJCD.js",
      "chunk-ZYGKC5SE.js",
      "chunk-IQGVCYTI.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-OZJ23U7Y.js",
      "chunk-ZYGKC5SE.js",
      "chunk-IQGVCYTI.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js",
      "chunk-GZGBSLD2.js",
      "chunk-ZYGKC5SE.js",
      "chunk-IQGVCYTI.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-XCEQQ2N3.js",
      "chunk-5GARNAWZ.js",
      "chunk-BJLVXPYC.js",
      "chunk-DM5JIE2W.js",
      "chunk-NRBNLFH3.js",
      "chunk-NCDDPRO4.js"
    ],
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23232, hash: '5cd4dd719dca7c61077a99df3b0db8e8dcb82a10c7f752d95e670f1e9dd77c83', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15352, hash: '8cea2ee8c650d88e3ea875fc21a90985fce5fb85a89c80d69057ce7b55b6a4af', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-SG56MJKN.css': {size: 9480, hash: 'BLaSFScN3h0', text: () => import('./assets-chunks/styles-SG56MJKN_css.mjs').then(m => m.default)}
  },
};
