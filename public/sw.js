if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return c[e]||(s=new Promise((async s=>{if("document"in self){const c=document.createElement("script");c.src=e,document.head.appendChild(c),c.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!c[e])throw new Error(`Module ${e} didn’t register its module`);return c[e]}))},s=(s,c)=>{Promise.all(s.map(e)).then((e=>c(1===e.length?e[0]:e)))},c={require:Promise.resolve(s)};self.define=(s,n,i)=>{c[s]||(c[s]=Promise.resolve().then((()=>{let c={};const a={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return c;case"module":return a;default:return e(s)}}))).then((e=>{const s=i(...e);return c.default||(c.default=s),c}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/UgaVCNEk6clLgwN9Pocsh/_buildManifest.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/UgaVCNEk6clLgwN9Pocsh/_ssgManifest.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/29107295.ff5eb2e99854bfed8551.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/30eecaf7486f66aff4d0871082ffc97e8d526c71.a3425921d46e9e4c0e63.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/3b17c30984fc041dde7b9d8d0d8885a20e7040fa.f9fa97ecc8865ca5eb32.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/71247caf95475e3ea7f9a0f8a30beb258b23d005.3ff2359fdd85b129c901.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/analytics.21dce5acc6c4f5be6659.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/c4e8da0c.20cd975606f8dadf8e82.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/commons.2b71805eb38dc390d793.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/d91e9ae9.6105d5187bc42cddf571.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/database.227cab3181b2662cb459.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.287d513e2aaeb040aa86.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/ff239f9d.9a70f820f8fb1d6fa3b1.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/framework.ae602c9f15f1d83ed78e.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/functions.7263313db610f12662e1.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/main-45828b76a6bfbf176ef8.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/messaging.6bffd17b812a995eb824.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/pages/_app-3bf1cac02565a6015b3f.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/pages/_error-9c69669f1b567cd95ded.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/pages/index-3a1dcd9f53f97d97cc98.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/pages/login-af4dbc2af41d58430ea2.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/performance.fa0dd7cf2710f6c6a974.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/polyfills-35458670f22c0f0e6ea8.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/remoteConfig.13bc6798489a368a091e.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/storage.8453f246a73d772df481.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/chunks/webpack-a8794785f9cdfde4ed39.js",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/_next/static/css/4135a82d62d2193525ed.css",revision:"UgaVCNEk6clLgwN9Pocsh"},{url:"/icons/GitHub-Mark-Light-120px-plus.png",revision:"472739dfb5857b1f659f4c4c6b4568d0"},{url:"/icons/android-chrome-192x192.png",revision:"983baedb62c553a3870a4b2719936150"},{url:"/icons/android-chrome-512x512.png",revision:"88aebf5d47d9c56e37d24911679d4cc6"},{url:"/icons/apple-touch-icon.png",revision:"c406dbba03494b604b04007b2da614cf"},{url:"/icons/favicon-16x16.png",revision:"90acebf02a494885f3c8425254a24f24"},{url:"/icons/favicon-32x32.png",revision:"cae6fd709fff91995cf63ffb913402be"},{url:"/icons/favicon.ico",revision:"d800ad90ef4896ec8919f8bb79b0a2dd"},{url:"/icons/google-icon.png",revision:"e9612850a6cb55eb547266043e1eef86"},{url:"/icons/icon-check.svg",revision:"5742160ca6ea943a508cc5763e8cd312"},{url:"/icons/icon-cross.svg",revision:"fe68d57f09f867dbbd1ff592c3b9a017"},{url:"/icons/icon-moon.svg",revision:"e66b8c621b1f209e44a7c955c0e5e809"},{url:"/icons/icon-sun.svg",revision:"b3182f3b0ccf1d65cae48b64861b83a9"},{url:"/icons/mstile-150x150.png",revision:"fb296382e2a3def17bde481e04f298b2"},{url:"/icons/unknown-user-icon.png",revision:"989ae912f4d6e110d81a7544891d0d45"},{url:"/images/bg-desktop-dark.jpg",revision:"02105f02a8dba33f6c8bafac6a9b0979"},{url:"/images/bg-desktop-light.jpg",revision:"988cb74c73a65433889e51b150c1a8f9"},{url:"/images/bg-mobile-dark.jpg",revision:"b0112ea5222ffd8c9d69349be56c620b"},{url:"/images/bg-mobile-light.jpg",revision:"266f20c7fd7778c0b72ac804fd769fe5"},{url:"/manifest.json",revision:"3e4104272acc50d844f6f8f03694783e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
