const CACHE_NAME = "timetable-cache-auto-v1";

const FILES_TO_CACHE = [
  "/timetable/",
  "/timetable/index.html",
  "/timetable/style.css",
  "/timetable/script.js",
  "/timetable/manifest.json",
  "/timetable/welcome.png",
  "/timetable/icon-192.png",
  "/timetable/icon-512.png"
];

/* INSTALL: cache fresh files */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
  self.skipWaiting();
});

/* ACTIVATE: delete ALL old caches automatically */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

/* FETCH: cache-first (stable for GitHub Pages) */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
