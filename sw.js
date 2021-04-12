// const version = 'minimal-pwa_v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('minimal-pwa_v1') //version 1 wichtig für updates
            .then(cache => cache.addAll([ // offline files
                'index.html',
                'icon196.png',
                'icon512.png',
                'manifest.webmanifest'
            ]))
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches
        .open('minimal-pwa_v1')
        .then(function (cache) {
          return cache.match(event.request);
        })
        .then(function (response) {
          return response || fetch(event.request);
        })
    );
});
