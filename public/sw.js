if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,n,c)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return i;case"module":return a;default:return e(s)}}))).then((e=>{const s=c(...e);return i.default||(i.default=s),i}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/G9XobkxA8eRicaEOLDSn_/_buildManifest.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/G9XobkxA8eRicaEOLDSn_/_ssgManifest.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/29107295.621d742822a168cc3713.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/commons.29ef2eaa460f0f765556.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/d91e9ae9.cb08a17963d628a50ee6.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.2fb93d4585311b8c5370.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/framework.76fac10824b6450d7d51.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/main-56db69474430cd3c8c8f.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/pages/_app-241df2e5adffb495f88c.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/pages/_error-872aa6f06502620de644.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/pages/index-408e304becd7c31a8f6c.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/polyfills-2473c6643d514137e5d1.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/chunks/webpack-95c2b224bccf352ee870.js",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/_next/static/css/a9ecd513c7e71990b1da.css",revision:"G9XobkxA8eRicaEOLDSn_"},{url:"/icons/android-chrome-192x192.png",revision:"983baedb62c553a3870a4b2719936150"},{url:"/icons/android-chrome-512x512.png",revision:"88aebf5d47d9c56e37d24911679d4cc6"},{url:"/icons/apple-touch-icon.png",revision:"c406dbba03494b604b04007b2da614cf"},{url:"/icons/favicon-16x16.png",revision:"90acebf02a494885f3c8425254a24f24"},{url:"/icons/favicon-32x32.png",revision:"cae6fd709fff91995cf63ffb913402be"},{url:"/icons/favicon.ico",revision:"d800ad90ef4896ec8919f8bb79b0a2dd"},{url:"/icons/icon-check.svg",revision:"5742160ca6ea943a508cc5763e8cd312"},{url:"/icons/icon-cross.svg",revision:"fe68d57f09f867dbbd1ff592c3b9a017"},{url:"/icons/icon-moon.svg",revision:"e66b8c621b1f209e44a7c955c0e5e809"},{url:"/icons/icon-sun.svg",revision:"b3182f3b0ccf1d65cae48b64861b83a9"},{url:"/icons/mstile-150x150.png",revision:"fb296382e2a3def17bde481e04f298b2"},{url:"/images/bg-desktop-dark.jpg",revision:"02105f02a8dba33f6c8bafac6a9b0979"},{url:"/images/bg-desktop-light.jpg",revision:"988cb74c73a65433889e51b150c1a8f9"},{url:"/images/bg-mobile-dark.jpg",revision:"b0112ea5222ffd8c9d69349be56c620b"},{url:"/images/bg-mobile-light.jpg",revision:"266f20c7fd7778c0b72ac804fd769fe5"},{url:"/manifest.json",revision:"3e4104272acc50d844f6f8f03694783e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
