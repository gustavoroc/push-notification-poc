self.addEventListener('push', (e) => {
    // Evento de push notification em si.

    console.log('Evento: ' + e.data)

    self.registration.showNotification(e.data, {});
});
