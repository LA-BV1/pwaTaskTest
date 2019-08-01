self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('api-cache')
      .then(function (cache) {
        return cache.addAll([
          "https://my-json-server.typicode.com/lazicmladen/PWATrainingFakeServer/mercants",
          "https://my-json-server.typicode.com/lazicmladen/PWATrainingFakeServer/users",
          "https://my-json-server.typicode.com/lazicmladen/PWATrainingFakeServer/categories",
        ]);
      })
  );
});

self.addEventListener('fetch', function (event) {
  console.log(event.request.url);
  event.respondWith(
    caches.match(event.request).then(function (response) {
      return response || fetch(event.request);
    })
  );
});