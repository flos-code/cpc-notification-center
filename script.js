let notificationsVisible = false;

function toggleNotifications() {
    if (notificationsVisible) {
        notificationsVisible = !notificationsVisible;
        document.getElementById('heading').classList.add('opacity_0')
        document.getElementById('bell').style.width = '64px';
    } else {
        notificationsVisible = !notificationsVisible;
        document.getElementById('heading').classList.remove('opacity_0')
        document.getElementById('bell').style.width = '320px';
    }

}
