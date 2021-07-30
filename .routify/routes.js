
/**
 * @sveltech/routify 1.9.9
 * File generated Fri Jul 30 2021 12:06:47 GMT+0100 (West Africa Standard Time)
 */

export const __version = "1.9.9"
export const __timestamp = "2021-07-30T11:06:47.409Z"

//buildRoutes
import { buildClientTree } from "@sveltech/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": true,
      "isDir": false,
      "file": "_fallback.svelte",
      "filepath": "/_fallback.svelte",
      "name": "_fallback",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/pc/Desktop/sms/src/pages/_fallback.svelte",
      "importPath": "../src/pages/_fallback.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": true,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/_fallback",
      "id": "__fallback",
      "component": () => import('../src/pages/_fallback.svelte').then(m => m.default)
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "_layout.svelte",
      "filepath": "/_layout.svelte",
      "name": "_layout",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/pc/Desktop/sms/src/pages/_layout.svelte",
      "importPath": "../src/pages/_layout.svelte",
      "isLayout": true,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/",
      "id": "__layout",
      "component": () => import('../src/pages/_layout.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "app",
      "filepath": "/app",
      "name": "app",
      "ext": "",
      "badExt": false,
      "absolutePath": "/home/pc/Desktop/sms/src/pages/app",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "_layout.svelte",
          "filepath": "/app/_layout.svelte",
          "name": "_layout",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/pc/Desktop/sms/src/pages/app/_layout.svelte",
          "importPath": "../src/pages/app/_layout.svelte",
          "isLayout": true,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/app",
          "id": "_app__layout",
          "component": () => import('../src/pages/app/_layout.svelte').then(m => m.default)
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "dashboard",
          "filepath": "/app/dashboard",
          "name": "dashboard",
          "ext": "",
          "badExt": false,
          "absolutePath": "/home/pc/Desktop/sms/src/pages/app/dashboard",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/app/dashboard/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/dashboard/index.svelte",
              "importPath": "../src/pages/app/dashboard/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/dashboard/index",
              "id": "_app_dashboard_index",
              "component": () => import('../src/pages/app/dashboard/index.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/app/dashboard"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "index.svelte",
          "filepath": "/app/index.svelte",
          "name": "index",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "/home/pc/Desktop/sms/src/pages/app/index.svelte",
          "importPath": "../src/pages/app/index.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": true,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/app/index",
          "id": "_app_index",
          "component": () => import('../src/pages/app/index.svelte').then(m => m.default)
        },
        {
          "isFile": false,
          "isDir": true,
          "file": "schools",
          "filepath": "/app/schools",
          "name": "schools",
          "ext": "",
          "badExt": false,
          "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "_layout.svelte",
              "filepath": "/app/schools/_layout.svelte",
              "name": "_layout",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/_layout.svelte",
              "importPath": "../src/pages/app/schools/_layout.svelte",
              "isLayout": true,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/schools",
              "id": "_app_schools__layout",
              "component": () => import('../src/pages/app/schools/_layout.svelte').then(m => m.default)
            },
            {
              "isFile": false,
              "isDir": true,
              "file": "[id]",
              "filepath": "/app/schools/[id]",
              "name": "[id]",
              "ext": "",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/[id]",
              "children": [
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "_layout.svelte",
                  "filepath": "/app/schools/[id]/_layout.svelte",
                  "name": "_layout",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/[id]/_layout.svelte",
                  "importPath": "../src/pages/app/schools/[id]/_layout.svelte",
                  "isLayout": true,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": false,
                  "ownMeta": {},
                  "meta": {
                    "preload": false,
                    "prerender": true,
                    "precache-order": false,
                    "precache-proximity": true,
                    "recursive": true
                  },
                  "path": "/app/schools/:id",
                  "id": "_app_schools__id__layout",
                  "component": () => import('../src/pages/app/schools/[id]/_layout.svelte').then(m => m.default)
                },
                {
                  "isFile": true,
                  "isDir": false,
                  "file": "index.svelte",
                  "filepath": "/app/schools/[id]/index.svelte",
                  "name": "index",
                  "ext": "svelte",
                  "badExt": false,
                  "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/[id]/index.svelte",
                  "importPath": "../src/pages/app/schools/[id]/index.svelte",
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": true,
                  "isFallback": false,
                  "isPage": true,
                  "ownMeta": {},
                  "meta": {
                    "preload": false,
                    "prerender": true,
                    "precache-order": false,
                    "precache-proximity": true,
                    "recursive": true
                  },
                  "path": "/app/schools/:id/index",
                  "id": "_app_schools__id_index",
                  "component": () => import('../src/pages/app/schools/[id]/index.svelte').then(m => m.default)
                }
              ],
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/schools/:id"
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "index.svelte",
              "filepath": "/app/schools/index.svelte",
              "name": "index",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/index.svelte",
              "importPath": "../src/pages/app/schools/index.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": true,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/schools/index",
              "id": "_app_schools_index",
              "component": () => import('../src/pages/app/schools/index.svelte').then(m => m.default)
            },
            {
              "isFile": false,
              "isDir": true,
              "file": "payrolls",
              "filepath": "/app/schools/payrolls",
              "name": "payrolls",
              "ext": "",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/payrolls",
              "children": [
                {
                  "isFile": false,
                  "isDir": true,
                  "file": "[id]",
                  "filepath": "/app/schools/payrolls/[id]",
                  "name": "[id]",
                  "ext": "",
                  "badExt": false,
                  "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/payrolls/[id]",
                  "children": [
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "_layout.svelte",
                      "filepath": "/app/schools/payrolls/[id]/_layout.svelte",
                      "name": "_layout",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/payrolls/[id]/_layout.svelte",
                      "importPath": "../src/pages/app/schools/payrolls/[id]/_layout.svelte",
                      "isLayout": true,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": false,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/payrolls/:id",
                      "id": "_app_schools_payrolls__id__layout",
                      "component": () => import('../src/pages/app/schools/payrolls/[id]/_layout.svelte').then(m => m.default)
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "index.svelte",
                      "filepath": "/app/schools/payrolls/[id]/index.svelte",
                      "name": "index",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/payrolls/[id]/index.svelte",
                      "importPath": "../src/pages/app/schools/payrolls/[id]/index.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": true,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/payrolls/:id/index",
                      "id": "_app_schools_payrolls__id_index",
                      "component": () => import('../src/pages/app/schools/payrolls/[id]/index.svelte').then(m => m.default)
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "view.svelte",
                      "filepath": "/app/schools/payrolls/[id]/view.svelte",
                      "name": "view",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/payrolls/[id]/view.svelte",
                      "importPath": "../src/pages/app/schools/payrolls/[id]/view.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/payrolls/:id/view",
                      "id": "_app_schools_payrolls__id_view",
                      "component": () => import('../src/pages/app/schools/payrolls/[id]/view.svelte').then(m => m.default)
                    }
                  ],
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": false,
                  "ownMeta": {},
                  "meta": {
                    "preload": false,
                    "prerender": true,
                    "precache-order": false,
                    "precache-proximity": true,
                    "recursive": true
                  },
                  "path": "/app/schools/payrolls/:id"
                }
              ],
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/schools/payrolls"
            },
            {
              "isFile": false,
              "isDir": true,
              "file": "profiles",
              "filepath": "/app/schools/profiles",
              "name": "profiles",
              "ext": "",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/profiles",
              "children": [
                {
                  "isFile": false,
                  "isDir": true,
                  "file": "[id]",
                  "filepath": "/app/schools/profiles/[id]",
                  "name": "[id]",
                  "ext": "",
                  "badExt": false,
                  "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/profiles/[id]",
                  "children": [
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "_layout.svelte",
                      "filepath": "/app/schools/profiles/[id]/_layout.svelte",
                      "name": "_layout",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/profiles/[id]/_layout.svelte",
                      "importPath": "../src/pages/app/schools/profiles/[id]/_layout.svelte",
                      "isLayout": true,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": false,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/profiles/:id",
                      "id": "_app_schools_profiles__id__layout",
                      "component": () => import('../src/pages/app/schools/profiles/[id]/_layout.svelte').then(m => m.default)
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "index.svelte",
                      "filepath": "/app/schools/profiles/[id]/index.svelte",
                      "name": "index",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/profiles/[id]/index.svelte",
                      "importPath": "../src/pages/app/schools/profiles/[id]/index.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": true,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/profiles/:id/index",
                      "id": "_app_schools_profiles__id_index",
                      "component": () => import('../src/pages/app/schools/profiles/[id]/index.svelte').then(m => m.default)
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "view.svelte",
                      "filepath": "/app/schools/profiles/[id]/view.svelte",
                      "name": "view",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/profiles/[id]/view.svelte",
                      "importPath": "../src/pages/app/schools/profiles/[id]/view.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/profiles/:id/view",
                      "id": "_app_schools_profiles__id_view",
                      "component": () => import('../src/pages/app/schools/profiles/[id]/view.svelte').then(m => m.default)
                    }
                  ],
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": false,
                  "ownMeta": {},
                  "meta": {
                    "preload": false,
                    "prerender": true,
                    "precache-order": false,
                    "precache-proximity": true,
                    "recursive": true
                  },
                  "path": "/app/schools/profiles/:id"
                }
              ],
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/schools/profiles"
            },
            {
              "isFile": false,
              "isDir": true,
              "file": "recruitments",
              "filepath": "/app/schools/recruitments",
              "name": "recruitments",
              "ext": "",
              "badExt": false,
              "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/recruitments",
              "children": [
                {
                  "isFile": false,
                  "isDir": true,
                  "file": "[id]",
                  "filepath": "/app/schools/recruitments/[id]",
                  "name": "[id]",
                  "ext": "",
                  "badExt": false,
                  "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/recruitments/[id]",
                  "children": [
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "_layout.svelte",
                      "filepath": "/app/schools/recruitments/[id]/_layout.svelte",
                      "name": "_layout",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/recruitments/[id]/_layout.svelte",
                      "importPath": "../src/pages/app/schools/recruitments/[id]/_layout.svelte",
                      "isLayout": true,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": false,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/recruitments/:id",
                      "id": "_app_schools_recruitments__id__layout",
                      "component": () => import('../src/pages/app/schools/recruitments/[id]/_layout.svelte').then(m => m.default)
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "index.svelte",
                      "filepath": "/app/schools/recruitments/[id]/index.svelte",
                      "name": "index",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/recruitments/[id]/index.svelte",
                      "importPath": "../src/pages/app/schools/recruitments/[id]/index.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": true,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/recruitments/:id/index",
                      "id": "_app_schools_recruitments__id_index",
                      "component": () => import('../src/pages/app/schools/recruitments/[id]/index.svelte').then(m => m.default)
                    },
                    {
                      "isFile": true,
                      "isDir": false,
                      "file": "view.svelte",
                      "filepath": "/app/schools/recruitments/[id]/view.svelte",
                      "name": "view",
                      "ext": "svelte",
                      "badExt": false,
                      "absolutePath": "/home/pc/Desktop/sms/src/pages/app/schools/recruitments/[id]/view.svelte",
                      "importPath": "../src/pages/app/schools/recruitments/[id]/view.svelte",
                      "isLayout": false,
                      "isReset": false,
                      "isIndex": false,
                      "isFallback": false,
                      "isPage": true,
                      "ownMeta": {},
                      "meta": {
                        "preload": false,
                        "prerender": true,
                        "precache-order": false,
                        "precache-proximity": true,
                        "recursive": true
                      },
                      "path": "/app/schools/recruitments/:id/view",
                      "id": "_app_schools_recruitments__id_view",
                      "component": () => import('../src/pages/app/schools/recruitments/[id]/view.svelte').then(m => m.default)
                    }
                  ],
                  "isLayout": false,
                  "isReset": false,
                  "isIndex": false,
                  "isFallback": false,
                  "isPage": false,
                  "ownMeta": {},
                  "meta": {
                    "preload": false,
                    "prerender": true,
                    "precache-order": false,
                    "precache-proximity": true,
                    "recursive": true
                  },
                  "path": "/app/schools/recruitments/:id"
                }
              ],
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": false,
              "ownMeta": {},
              "meta": {
                "preload": false,
                "prerender": true,
                "precache-order": false,
                "precache-proximity": true,
                "recursive": true
              },
              "path": "/app/schools/recruitments"
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "preload": false,
            "prerender": true,
            "precache-order": false,
            "precache-proximity": true,
            "recursive": true
          },
          "path": "/app/schools"
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/app"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "/home/pc/Desktop/sms/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "preload": false,
        "prerender": true,
        "precache-order": false,
        "precache-proximity": true,
        "recursive": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "preload": false,
    "prerender": true,
    "precache-order": false,
    "precache-proximity": true,
    "recursive": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

