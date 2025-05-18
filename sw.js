// cache name & assets to pre-cache
const CACHE_NAME = 'my-pwa-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/project.html',
  '/manifest.json',
  '/img/icons/icon-192x192.png',
  '/img/icons/icon-512x512.png',
  // add any CSS/JS you need offline:
  '/css/style.css',
  '/js/main.js'
];

// INSTALL: cache app shell
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// ACTIVATE: take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

// FETCH: cache-first strategy
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(cached => cached || fetch(event.request))
  );
});
