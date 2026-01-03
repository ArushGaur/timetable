const CACHE_NAME = "timetable-runtime-cache";

/* Install */
self.addEventListener("install", () => {
  self.skipWaiting();
});

/* Activate */
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

/* Fetch – Network First, Cache Images */
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const request = event.request;

  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        // Cache images + files
        if (
          request.destination === "image" ||
          request.url.includes("/timetable/")
        ) {
          const clone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(request, clone);
          });
        }
        return networkResponse;
      })
      .catch(() => caches.match(request))
  );
});
