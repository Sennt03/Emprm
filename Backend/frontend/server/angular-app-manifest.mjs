
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SPDPDHOW.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SPDPDHOW.js",
      "chunk-HEUCY3A5.js",
      "chunk-KX72R65T.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-SPDPDHOW.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth/**"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js"
    ],
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-3EYNSB4P.js",
      "chunk-FV5K3ZJC.js"
    ],
    "route": "/panel/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-WMPIQ67A.js",
      "chunk-FV5K3ZJC.js",
      "chunk-N3SVMLGA.js",
      "chunk-B5QRGL6C.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-R2KFVZRS.js",
      "chunk-JIUI4CBL.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-N3SVMLGA.js",
      "chunk-B5QRGL6C.js"
    ],
    "route": "/panel/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-EVWAIMHF.js",
      "chunk-L3K6LR5W.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/categories/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-T6IJSMOT.js",
      "chunk-5J5K3S7Q.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/media"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-UFBVRLIH.js",
      "chunk-4GILORHF.js",
      "chunk-YMWQMKSM.js",
      "chunk-QL5IHC6Z.js",
      "chunk-N3SVMLGA.js",
      "chunk-B5QRGL6C.js"
    ],
    "route": "/panel/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-T6UVHKGN.js",
      "chunk-YMWQMKSM.js",
      "chunk-JIUI4CBL.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-EVWAIMHF.js",
      "chunk-L3K6LR5W.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-CJFIDSSU.js",
      "chunk-L3K6LR5W.js",
      "chunk-AIAQNSKE.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/images/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-T6UVHKGN.js",
      "chunk-YMWQMKSM.js",
      "chunk-JIUI4CBL.js",
      "chunk-5J5K3S7Q.js",
      "chunk-QL5IHC6Z.js",
      "chunk-KX72R65T.js"
    ],
    "route": "/panel/products/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-YE2V7DNW.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js"
    ],
    "route": "/panel/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-LK4KPNM3.js",
      "chunk-L3K6LR5W.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-B5QRGL6C.js"
    ],
    "route": "/panel/import/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js",
      "chunk-TE5QN7S7.js",
      "chunk-L3K6LR5W.js",
      "chunk-LQCJWDTU.js",
      "chunk-AIAQNSKE.js",
      "chunk-B5QRGL6C.js"
    ],
    "route": "/panel/import/jobs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-RYDL2IUK.js",
      "chunk-UO7VFFY4.js",
      "chunk-B27K4YFI.js",
      "chunk-RXPIVAZZ.js"
    ],
    "redirectTo": "/panel",
    "route": "/panel/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-ND6LNB6V.js",
      "chunk-UCM6TQZJ.js",
      "chunk-EXZUYHEF.js",
      "chunk-VBBRNQFT.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
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
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
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
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
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
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-KQR6INZJ.js",
      "chunk-3JYRHSNX.js",
      "chunk-VBBRNQFT.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-3ADYH4NX.js",
      "chunk-3JYRHSNX.js",
      "chunk-VBBRNQFT.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-RX326CJ6.js",
      "chunk-VBBRNQFT.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-DA35QAH7.js",
      "chunk-VBBRNQFT.js",
      "chunk-RXPIVAZZ.js"
    ],
    "route": "/datos-envio"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
      "chunk-XLB7FBS6.js",
      "chunk-4GILORHF.js",
      "chunk-UO7VFFY4.js",
      "chunk-EGEZELMB.js",
      "chunk-VBBRNQFT.js",
      "chunk-H5MBM42I.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KCY7PBWU.js",
      "chunk-ZTR753QE.js",
      "chunk-6UCJG7TQ.js",
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
    'index.csr.html': {size: 23229, hash: 'b6b7548cdc9487f8178e278db8cf25e84af8516c9b2825190339ff032581bc13', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15349, hash: '2b39cdba90bc0640d3382982ab88ded6ac2d9c2f1d3efdf30f9670fc70dd034d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AFAMJ2SG.css': {size: 9589, hash: '0Pw1iMQAL/4', text: () => import('./assets-chunks/styles-AFAMJ2SG_css.mjs').then(m => m.default)}
  },
};
