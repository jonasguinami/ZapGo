// sw.js - Service Worker

// A versão do cache força a atualização no navegador do usuário quando você muda o código
const CACHE_NAME = 'zap-go-v2';

// Lista de arquivos que serão salvos para o site funcionar offline
const urlsToCache = [
  '/',
  'index.html',
  'style.css',
  'script.js',
  'templates.js',
  'assets/zapgo192.jpg', // Caminho correto
  'assets/zapgo512.jpg', // Caminho correto
  'assets/zapgo.png'      // Caminho correto
];

// Evento de Instalação: Salva os arquivos no cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto e arquivos sendo adicionados');
        return cache.addAll(urlsToCache);
      })
  );
});

// Evento de Ativação: Limpa caches antigos para manter tudo atualizado
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

// Evento de Fetch: Responde com os arquivos do cache se estiverem disponíveis
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Se o arquivo estiver no cache, retorna ele. Senão, busca na rede.
        return response || fetch(event.request);
      })
  );
});