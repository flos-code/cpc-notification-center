const button = document.querySelector(".notification-center > button");
const notifications = document.querySelector(".notifications");

button.addEventListener("click", function () {
    if (button.getAttribute("aria-expanded") === "true") {
        button.setAttribute("aria-expanded", "false");
    } else {
        button.setAttribute("aria-expanded", "true");
    }
    notifications.classList.toggle("hidden");
});
