const assets = [
  "./",
  "./index.html",
  "./app.js",
  "./css/style.css",
  "./css/bootstrap.min.css",
  "./js/main.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
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
