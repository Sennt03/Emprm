
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GD2ENHMZ.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GD2ENHMZ.js",
      "chunk-MEEAG3MX.js",
      "chunk-BSPZPZ5Z.js",
      "chunk-LUO4HE3Z.js"
    ],
    "route": "/auth/login"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-GD2ENHMZ.js"
    ],
    "redirectTo": "/auth/login",
    "route": "/auth/**"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js"
    ],
    "route": "/panel"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-NDQVHVPZ.js",
      "chunk-X3UNS6LG.js"
    ],
    "route": "/panel/profile"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-IORCH5MR.js",
      "chunk-X3UNS6LG.js",
      "chunk-NEXNF2QA.js",
      "chunk-XOWPU273.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/users"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-LOVJJYTC.js",
      "chunk-TRJ6K4PE.js",
      "chunk-NUVG6UML.js",
      "chunk-RSZQ4LOV.js",
      "chunk-NEXNF2QA.js",
      "chunk-XOWPU273.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/categories"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-7AHVZCZJ.js",
      "chunk-LCLRMSDD.js",
      "chunk-LQCJWDTU.js",
      "chunk-IDS3HMOH.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/categories/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-ETOE7IBB.js",
      "chunk-NUVG6UML.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/media"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-6NYLK7JY.js",
      "chunk-UK67HWHR.js",
      "chunk-T63NPLLG.js",
      "chunk-RSZQ4LOV.js",
      "chunk-NEXNF2QA.js",
      "chunk-XOWPU273.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/products"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-43ZBMCGJ.js",
      "chunk-T63NPLLG.js",
      "chunk-TRJ6K4PE.js",
      "chunk-NUVG6UML.js",
      "chunk-RSZQ4LOV.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/products/new"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-7AHVZCZJ.js",
      "chunk-LCLRMSDD.js",
      "chunk-LQCJWDTU.js",
      "chunk-IDS3HMOH.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/products/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-ZESS5RLU.js",
      "chunk-LCLRMSDD.js",
      "chunk-IDS3HMOH.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/products/images/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-43ZBMCGJ.js",
      "chunk-T63NPLLG.js",
      "chunk-TRJ6K4PE.js",
      "chunk-NUVG6UML.js",
      "chunk-RSZQ4LOV.js",
      "chunk-BSPZPZ5Z.js"
    ],
    "route": "/panel/products/*/edit"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-32BLFHLZ.js",
      "chunk-LQCJWDTU.js",
      "chunk-IDS3HMOH.js"
    ],
    "route": "/panel/import"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-K7VKQG5G.js",
      "chunk-LCLRMSDD.js",
      "chunk-LQCJWDTU.js",
      "chunk-IDS3HMOH.js",
      "chunk-XOWPU273.js"
    ],
    "route": "/panel/import/history"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js",
      "chunk-P4CPIYYM.js",
      "chunk-LCLRMSDD.js",
      "chunk-LQCJWDTU.js",
      "chunk-IDS3HMOH.js",
      "chunk-XOWPU273.js"
    ],
    "route": "/panel/import/jobs/*"
  },
  {
    "renderMode": 1,
    "preload": [
      "chunk-I7G5MZJH.js",
      "chunk-VOSIPTF2.js",
      "chunk-LUO4HE3Z.js"
    ],
    "redirectTo": "/panel",
    "route": "/panel/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-XEC6S7F6.js",
      "chunk-O62LYAXH.js",
      "chunk-4JFUQHIW.js",
      "chunk-QCAEKBPZ.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-XHLS5HRK.js",
      "chunk-FVSVL5HT.js",
      "chunk-4JFUQHIW.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/categoria/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-HKH65PMB.js",
      "chunk-4JFUQHIW.js"
    ],
    "route": "/producto/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-L7BN3YVA.js",
      "chunk-4JFUQHIW.js"
    ],
    "route": "/orden/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-7HRRBKNM.js",
      "chunk-L23C3R4F.js",
      "chunk-QCAEKBPZ.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-5KVDLBIQ.js",
      "chunk-L23C3R4F.js",
      "chunk-QCAEKBPZ.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-MXPPFDIO.js",
      "chunk-QCAEKBPZ.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-JJI24H3U.js",
      "chunk-QCAEKBPZ.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-45YJNPUB.js",
      "chunk-KGDUA676.js",
      "chunk-QSYDJIJN.js",
      "chunk-4M5ZO5EN.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js"
    ],
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23229, hash: '7bef96adfa6cbe0f2f4810c51f581eac0ec38ab8c9d19bf729e2fe4adcc96604', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15349, hash: '6f3446d2a56b16d1ee56f9394b6de887314effdfdd2751d7b226a0243cccad98', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AFAMJ2SG.css': {size: 9589, hash: '0Pw1iMQAL/4', text: () => import('./assets-chunks/styles-AFAMJ2SG_css.mjs').then(m => m.default)}
  },
};
