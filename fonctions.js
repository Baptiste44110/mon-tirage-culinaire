*/* Notifications */

let notificationTimeout;

function showNotification(message, duration = 3000, type = 'info') {
  const notification = document.getElementById('notification');
  notification.textContent = message;

  // Nettoyer les classes de type avant d'ajouter la bonne
  notification.classList.remove('fade-out', 'visible', 'error', 'info');

  // Ajouter la classe correspondant au type (par défaut 'info')
  notification.classList.add('visible', type);

  if (notificationTimeout) clearTimeout(notificationTimeout);

  notificationTimeout = setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.classList.remove('visible', 'fade-out', 'error', 'info');
    }, 400);
  }, duration);
}

