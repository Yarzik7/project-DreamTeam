window.onload = function () {
    const currentPath = window.location.pathname;

    const menuItems = document.querySelectorAll('.nav__link, .burger-menu__link');

    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].getAttribute('href') === currentPath) {
            menuItems[i].classList.add('current-page');
        }
    }

    if (currentPath === '/index.html') {
        const homeMenuItem = document.querySelector('.nav__link[href="/index.html"]');
        if (homeMenuItem) {
            homeMenuItem.classList.add('current-page');
        }
    }

}