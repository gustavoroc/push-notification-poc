self.addEventListener('push', (e) => {
    // Evento de push notification em si.

    console.log('Evento: ' + e.data.text())

    self.registration.showNotification(e.data.text(), {});
});
