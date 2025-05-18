const assets = [
  "/",
  "index.html",
 
];

self.addEventListener("install", function (installEvent) {
  installEvent.waitUntil(
    caches.open("my-pwa").then(function (cache) {
      cache.addAll(assets)
    })
  )
})

self.addEventListener('fetch', function (fetchEvent) {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(function (res) {
      return res || fetch(fetchEvent.request)
    })
  )
})
