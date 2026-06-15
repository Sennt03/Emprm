
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4M6P3MOX.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4M6P3MOX.js",
      "chunk-EWJXVCBG.js",
      "chunk-VEAXCQX7.js",
      "chunk-RRQYAYG6.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-4M6P3MOX.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth/**"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js"
    ],
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-OZZ62IRQ.js",
      "chunk-G3EUV4LG.js"
    ],
    "route": "/panel/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-EDNWH53R.js",
      "chunk-G3EUV4LG.js",
      "chunk-S7RGKLFS.js",
      "chunk-CPDJZZL3.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-25X44JW5.js",
      "chunk-IASCIF4I.js",
      "chunk-5U5OEUNP.js",
      "chunk-VNH27GAJ.js",
      "chunk-S7RGKLFS.js",
      "chunk-CPDJZZL3.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-HVSCNLRV.js",
      "chunk-S5GA6RXU.js",
      "chunk-LQCJWDTU.js",
      "chunk-TQE5CEMF.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/categories/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-2F3XW2TJ.js",
      "chunk-5U5OEUNP.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/media"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-AXHIYELE.js",
      "chunk-SYBW5DAP.js",
      "chunk-VNH27GAJ.js",
      "chunk-S7RGKLFS.js",
      "chunk-CPDJZZL3.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-R3K5VTVN.js",
      "chunk-SYBW5DAP.js",
      "chunk-IASCIF4I.js",
      "chunk-5U5OEUNP.js",
      "chunk-VNH27GAJ.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/products/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-HVSCNLRV.js",
      "chunk-S5GA6RXU.js",
      "chunk-LQCJWDTU.js",
      "chunk-TQE5CEMF.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/products/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-UZJALUIR.js",
      "chunk-S5GA6RXU.js",
      "chunk-TQE5CEMF.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/products/images/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-R3K5VTVN.js",
      "chunk-SYBW5DAP.js",
      "chunk-IASCIF4I.js",
      "chunk-5U5OEUNP.js",
      "chunk-VNH27GAJ.js",
      "chunk-VEAXCQX7.js"
    ],
    "route": "/panel/products/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-CIQVGYEX.js",
      "chunk-LQCJWDTU.js",
      "chunk-TQE5CEMF.js"
    ],
    "route": "/panel/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-B72R5565.js",
      "chunk-S5GA6RXU.js",
      "chunk-LQCJWDTU.js",
      "chunk-TQE5CEMF.js",
      "chunk-CPDJZZL3.js"
    ],
    "route": "/panel/import/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js",
      "chunk-4XWOJJTD.js",
      "chunk-S5GA6RXU.js",
      "chunk-LQCJWDTU.js",
      "chunk-TQE5CEMF.js",
      "chunk-CPDJZZL3.js"
    ],
    "route": "/panel/import/jobs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-L4IBXNRK.js",
      "chunk-S6VNU3D5.js",
      "chunk-RRQYAYG6.js"
    ],
    "redirectTo": "/panel",
    "route": "/panel/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-RKI3KW2E.js",
      "chunk-SAZ4MVEB.js",
      "chunk-UG3VWSIH.js",
      "chunk-ADI7XOI2.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-BYBO2FCM.js",
      "chunk-DN273M6L.js",
      "chunk-UG3VWSIH.js",
      "chunk-ZAHPU4EP.js"
    ],
    "route": "/categoria/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-KSJ3KMCF.js",
      "chunk-UG3VWSIH.js"
    ],
    "route": "/producto/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-6OQQDFIE.js",
      "chunk-UG3VWSIH.js"
    ],
    "route": "/orden/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-7IEZZDHE.js",
      "chunk-BBS6LRGB.js",
      "chunk-ADI7XOI2.js",
      "chunk-ZAHPU4EP.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-WNVXRCQK.js",
      "chunk-BBS6LRGB.js",
      "chunk-ADI7XOI2.js",
      "chunk-ZAHPU4EP.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-ADX2EPIE.js",
      "chunk-ADI7XOI2.js",
      "chunk-ZAHPU4EP.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js",
      "chunk-XJBZ35HF.js",
      "chunk-ADI7XOI2.js",
      "chunk-ZAHPU4EP.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EU72TNPL.js",
      "chunk-5R3LHDOG.js",
      "chunk-3KXZMR46.js",
      "chunk-DM5JIE2W.js",
      "chunk-GWQXKEGF.js",
      "chunk-S6VNU3D5.js"
    ],
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23301, hash: 'b7be3ed3684ad844be0ee25afe2c58282579f74c9ca95e33ef1c2943bcee0c4d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15421, hash: 'b567c7968ba4986d2e0e72ceeac279ac0fe417b8a45364cf78b8b155ab70e68b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AFAMJ2SG.css': {size: 9589, hash: '0Pw1iMQAL/4', text: () => import('./assets-chunks/styles-AFAMJ2SG_css.mjs').then(m => m.default)}
  },
};
