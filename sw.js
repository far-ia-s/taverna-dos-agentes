// Service worker: guarda tudo no 1º acesso para abrir offline.
// Mudou a página, o config ou a arte? Suba a VERSAO para os celulares baixarem de novo.
var VERSAO = 'taverna-v1'
importScripts('config.js')
var BASE = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'arte/fundo/taverna.jpg',
  'icones/apple-touch-icon.png', 'icones/icone-192.png', 'icones/icone-512.png', 'icones/icone-maskable-512.png']
;((self.TAVERNA && self.TAVERNA.agentes) || []).forEach(function (g) {
  if (g.sprite) (g.poses || ['parado']).forEach(function (p) { BASE.push('arte/agentes/' + encodeURIComponent(g.id) + '/' + p + '.png') })
})

self.addEventListener('install', function (e) {
  // uma imagem que falta não impede o resto de ir para o cache
  e.waitUntil(caches.open(VERSAO).then(function (c) {
    return Promise.all(BASE.map(function (u) { return c.add(u).catch(function () {}) }))
  }).then(function () { return self.skipWaiting() }))
})
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== VERSAO }).map(function (k) { return caches.delete(k) }))
  }).then(function () { return self.clients.claim() }))
})
self.addEventListener('fetch', function (e) {
  var r = e.request
  if (r.method !== 'GET') return
  // página e config: rede primeiro (pega atualização), cache se estiver offline
  if (r.mode === 'navigate' || /config\.js$/.test(new URL(r.url).pathname)) {
    e.respondWith(fetch(r).then(function (res) {
      var copia = res.clone(); caches.open(VERSAO).then(function (c) { c.put(r.mode === 'navigate' ? 'index.html' : r, copia) }); return res
    }).catch(function () { return caches.match(r.mode === 'navigate' ? 'index.html' : r, { ignoreSearch: true }) }))
    return
  }
  // arte e fontes: cache primeiro, guarda o que vier da rede
  e.respondWith(caches.match(r, { ignoreSearch: true }).then(function (achou) {
    return achou || fetch(r).then(function (res) {
      if (res.ok || res.type === 'opaque') { var copia = res.clone(); caches.open(VERSAO).then(function (c) { c.put(r, copia) }) }
      return res
    })
  }))
})
