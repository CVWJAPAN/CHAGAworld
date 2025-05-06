
self.addEventListener('install', function(event) {
  console.log('Service Worker: インストール完了');
});

self.addEventListener('fetch', function(event) {
  // ネットワーク経由で取得（必要に応じてキャッシュ対応を追加可能）
  event.respondWith(fetch(event.request));
});
