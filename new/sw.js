navigator.serviceWorker && navigator.serviceWorker.register('./service.js').then(function(registration) {
  console.log('Excellent, registered with scope: ', registration.scope);
});