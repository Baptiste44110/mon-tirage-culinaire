*/* Notifications */

let notificationTimeout;

export function showNotification(message, duration = 3000) {
  const notification = document.getElementById('notification');
  if (!notification) return;

  notification.textContent = message;
  notification.classList.remove('fade-out');
  notification.classList.add('visible');

  if (notificationTimeout) clearTimeout(notificationTimeout);

  notificationTimeout = setTimeout(() => {
    notification.classList.add('fade-out');
    setTimeout(() => {
      notification.classList.remove('visible', 'fade-out');
    }, 400);
  }, duration);
}
