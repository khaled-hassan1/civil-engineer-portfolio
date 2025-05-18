if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js', { scope: '/' })
      .then(reg => console.log('Service Worker registered!', reg))
      .catch(err => console.error('SW registration failed:', err));
  });
}
