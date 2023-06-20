self.addEventListener('push', (e) => {
    // Evento de push notification em si.

    console.log('Evento: ' + e.data.json().data)

    self.registration.showNotification(e.data.json().data, {});
});