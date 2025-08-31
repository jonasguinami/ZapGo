// sw.js

const CACHE_NAME = 'zapgo-v3'; // Mude a versão para forçar a atualização

// Lista de arquivos essenciais para o app funcionar offline
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json', // Adicionado
  'zapgo192.png', // Adicionado
  'zapgo512.png', // Adicionado
  'zapgo.png' // A logo da navbar
];

// Evento de Instalação: Salva os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto e arquivos essenciais adicionados.');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de Ativação: Limpa caches antigos
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            console.log('Cache antigo removido:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Evento de Fetch: Responde com os arquivos do cache se offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});