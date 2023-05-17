
window.onload = function () {
    const currentPath = window.location.pathname;

    const menuItems = document.querySelectorAll('.nav__link, .burger-menu__link');

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].getAttribute('href') === currentPath) {
            menuItems[i].classList.add('current-page');
        } else {
            menuItems[i].classList.remove('current-page');
        
        }

    }
}