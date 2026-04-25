const CACHE_NAME = 'pisco-nazca-v2'
const STATIC_ASSETS = [
  './',
  './index.html',
  './css/style.css',
  './js/script.js',
  './manifest.webmanifest',
  './images/Logo.png',
  './images/LogoTienda.png',
  './images/home-img-1.png',
  './images/home-img-2.png',
  './images/home-img-3.png',
  './images/home-img-4.png',
  './images/about-img.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse

      return fetch(event.request)
        .then((networkResponse) => {
          const responseClone = networkResponse.clone()
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone)
          })
          return networkResponse
        })
        .catch(() => caches.match('./index.html'))
    }),
  )
})
