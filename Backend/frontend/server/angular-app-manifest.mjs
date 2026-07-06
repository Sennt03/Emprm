
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RTRSPFNY.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RTRSPFNY.js",
      "chunk-SHW6RYRJ.js",
      "chunk-KX72R65T.js",
      "chunk-KMWEQZOH.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RTRSPFNY.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth/**"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js"
    ],
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-J5J2ZALT.js",
      "chunk-FV5K3ZJC.js"
    ],
    "route": "/panel/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-TC5OOLEZ.js",
      "chunk-FV5K3ZJC.js",
      "chunk-UEP2OELP.js",
      "chunk-4LZ7ECTN.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-Y34E3RKT.js",
      "chunk-FHWGIFUL.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-UEP2OELP.js",
      "chunk-4LZ7ECTN.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-5DU6LU4D.js",
      "chunk-DGCG3WNK.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/categories/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-SZZKFR45.js",
      "chunk-5J5K3S7Q.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/media"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-AEKRCPI7.js",
      "chunk-4GILORHF.js",
      "chunk-YMWQMKSM.js",
      "chunk-QL5IHC6Z.js",
      "chunk-UEP2OELP.js",
      "chunk-4LZ7ECTN.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-MSMVSATG.js",
      "chunk-YMWQMKSM.js",
      "chunk-FHWGIFUL.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-5DU6LU4D.js",
      "chunk-DGCG3WNK.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-TODBVAC7.js",
      "chunk-DGCG3WNK.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/images/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-MSMVSATG.js",
      "chunk-YMWQMKSM.js",
      "chunk-FHWGIFUL.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-EU4TCT4C.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js"
    ],
    "route": "/panel/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-ADYD7TAY.js",
      "chunk-DGCG3WNK.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-4LZ7ECTN.js"
    ],
    "route": "/panel/import/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js",
      "chunk-CW7VTPA5.js",
      "chunk-DGCG3WNK.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-4LZ7ECTN.js"
    ],
    "route": "/panel/import/jobs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4LY67AOT.js",
      "chunk-UO7VFFY4.js",
      "chunk-KMWEQZOH.js"
    ],
    "redirectTo": "/panel",
    "route": "/panel/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-ILJRIYF6.js",
      "chunk-UCM6TQZJ.js",
      "chunk-EXZUYHEF.js",
      "chunk-YX46XE52.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
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
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-6TAVZZDG.js",
      "chunk-EXZUYHEF.js"
    ],
    "route": "/producto/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
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
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-YOXEU434.js",
      "chunk-3JYRHSNX.js",
      "chunk-YX46XE52.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-OUCIHQJN.js",
      "chunk-3JYRHSNX.js",
      "chunk-YX46XE52.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-DWETGWBZ.js",
      "chunk-YX46XE52.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-IRX2EJII.js",
      "chunk-YX46XE52.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CVRBH3FA.js",
      "chunk-ZTR753QE.js",
      "chunk-PE6EGN7H.js",
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
    'index.csr.html': {size: 23229, hash: 'b57d761733ce68e303b143645a5c2a78e6a5ae54af2e7ef66cf0a875ffd588b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15349, hash: '4d6329e1bdba5f6060de7a684fe98586aca49c2f677bda79b9913afb306922b6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AFAMJ2SG.css': {size: 9589, hash: '0Pw1iMQAL/4', text: () => import('./assets-chunks/styles-AFAMJ2SG_css.mjs').then(m => m.default)}
  },
};
