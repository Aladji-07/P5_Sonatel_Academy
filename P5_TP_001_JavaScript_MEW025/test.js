const greenBtn = document.getElementById("btn-green");
const redBtn = document.getElementById("btn-red");
const blueBtn = document.getElementById("btn-blue");
const notificationContainer = document.getElementById("notification-container");

greenBtn.addEventListener("click", () => {
  showNotification("Bouton vert cliqué", "green");
});

redBtn.addEventListener("click", () => {
  showNotification("Bouton rouge cliqué", "red");
});

blueBtn.addEventListener("click", () => {
  showNotification("Bouton bleu cliqué", "blue");
});

function showNotification(message, color) {
  const notification = document.createElement("div");
  notification.classList.add("notification", color);
  notification.innerText = message;
  notificationContainer.appendChild(notification);
  setTimeout(() => {
    notificationContainer.removeChild(notification);
  }, 10000);
}
