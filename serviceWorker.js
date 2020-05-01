const thrasher_cache = "thrasher-app-v1"
const assets = [
  "/",
  "/index.html",
  "/style/index.css",
  "/app.js",
  "/images/*",
  "/main.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(thrasher_cache).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })