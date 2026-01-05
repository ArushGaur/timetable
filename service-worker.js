const CACHE_NAME = "timetable-v" + Date.now(); 
const STATIC_ASSETS = [
  "/timetable/",
  "/timetable/index.html",
  "/timetable/style.css",
  "/timetable/script.js",
  "/timetable/manifest.json",
  "/timetable/icon-192.png",
  "/timetable/welcome.png",
  "/timetable/icon-512.png"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => caches.delete(key)) // Clear ALL old caches on activation
      );
    })
  );
  self.clients.claim();
});

// NETWORK FIRST STRATEGY
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        // If network is successful, update cache and return response
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
      .catch(() => {
        // If network fails (offline), try the cache
        return caches.match(event.request);
      })
  );
});


