
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
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
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-CB7B55GN.js",
      "chunk-O62LYAXH.js",
      "chunk-4JFUQHIW.js",
      "chunk-BFCL7C27.js"
    ],
    "route": "/catalogo"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-ULQQ6HVP.js",
      "chunk-FVSVL5HT.js",
      "chunk-4JFUQHIW.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/categoria/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-I5HQZQI2.js",
      "chunk-4JFUQHIW.js"
    ],
    "route": "/producto/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-CLSSJSMU.js",
      "chunk-4JFUQHIW.js"
    ],
    "route": "/orden/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-34DDBQSF.js",
      "chunk-L23C3R4F.js",
      "chunk-BFCL7C27.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/historia"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-MA6PC3A3.js",
      "chunk-L23C3R4F.js",
      "chunk-BFCL7C27.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/resenas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-ZCUBT667.js",
      "chunk-BFCL7C27.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/redes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js",
      "chunk-LGDOINBK.js",
      "chunk-BFCL7C27.js",
      "chunk-JVIXR3RY.js"
    ],
    "route": "/tiendas"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ASLQG2OU.js",
      "chunk-KGDUA676.js",
      "chunk-ZAMCY4J3.js",
      "chunk-KEHETWD7.js",
      "chunk-UK67HWHR.js",
      "chunk-VOSIPTF2.js"
    ],
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23229, hash: 'aa2e927a1206a8813f8ee5ef311bf197ac818e10f37aebd86d2c53bc5bff35ec', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15349, hash: 'd35ecf85870163f6af3e75d66d099b1d57edaefd251219187d4045cfc2a82abc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-AFAMJ2SG.css': {size: 9589, hash: '0Pw1iMQAL/4', text: () => import('./assets-chunks/styles-AFAMJ2SG_css.mjs').then(m => m.default)}
  },
};
