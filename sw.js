const CACHE_NAME = 'tio-binho-v12';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './icone-192.png',
  './icone-512.png',
  './capa.png',
  './manifest.json',
  './supabase-config.js',
  './auth.js',
  './access-log.js',
  './platform-detect.js',
  'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .catch(err => console.log('Cache install error:', err))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }

  // Ignorar requisições de extensões e protocolos não-HTTP
  if (!event.request.url.startsWith('http')) {
    return;
  }

  // Não cachear requisições para o Supabase (sempre usar network)
  if (event.request.url.includes('supabase.co')) {
    return;
  }

  // Estratégia: Network first, fallback para cache
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Se a resposta for válida, cachear
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(event.request, responseToCache);
          })
          .catch(err => console.log('Cache put error:', err));
        return response;
      })
      .catch(() => {
        // Se falhar, usar cache
        return caches.match(event.request)
          .then(response => response || caches.match('./index.html'));
      })
  );
});
