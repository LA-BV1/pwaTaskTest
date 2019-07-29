if ('function' === typeof importScripts) {
    importScripts(
        'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
        console.log('Workbox is loaded');

        /* injection point for manifest files.  */
        workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "1b739cd4552e3546920dc285a8a3eaec"
  },
  {
    "url": "precache-manifest.e27a4446466cf43f5f5dd1ef30da2aa2.js",
    "revision": "e27a4446466cf43f5f5dd1ef30da2aa2"
  },
  {
    "url": "pwa512.png",
    "revision": "bec75a0636beabbba2c48bab677603dc"
  },
  {
    "url": "service-worker.js",
    "revision": "34280427a28c47d0b310f7b2b6ad173f"
  },
  {
    "url": "static/css/2.5ec480d0.chunk.css",
    "revision": "eae26a8a9ccd84c2519c562016fb6418"
  },
  {
    "url": "static/css/main.d8a05693.chunk.css",
    "revision": "4b8343f077bfd7a11c091f0434ed1614"
  },
  {
    "url": "static/js/2.8bd27605.chunk.js",
    "revision": "7be74750873a6b8380986fdf9fba4a7b"
  },
  {
    "url": "static/js/main.af9bb38f.chunk.js",
    "revision": "c5ddad4241b632f1ea7452ed19d046c7"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);

        /* custom cache rules*/
        workbox.routing.registerNavigationRoute('/index.html', {
            blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
        });

        workbox.routing.registerRoute(
            /\.(?:png|gif|jpg|jpeg|js|html)$/,
            workbox.strategies.cacheFirst({
                cacheName: 'images',
                plugins: [
                    new workbox.expiration.Plugin({
                        maxEntries: 60,
                        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                    }),
                ],
            })
        );

    } else {
        console.log('Workbox could not be loaded. No Offline support');
    }
}