const CACHE_NAME = "timetable-cache-v1";

const FILES_TO_CACHE = [
  "/timetable/",
  "/timetable/index.html",
  "/timetable/style.css",
  "/timetable/script.js",
  "/timetable/manifest.json",
  "/timetable/icon-192.jpg",
  "/timetable/icon-512.png"
];
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SHOW_NOTIFICATION") {
    self.registration.showNotification(event.data.title, {
      body: event.data.body,
      icon: "/icon-192.png",
      badge: "/icon-192.png",
      vibrate: [200, 100, 200],
      tag: event.data.tag,
      requireInteraction: true
    });
  }
});



