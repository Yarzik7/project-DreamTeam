
// window.onload = function () {
//     const currentPath = window.location.pathname;

//     const menuItems = document.querySelectorAll('.nav__link, .burger-menu__link');

//     for (let i = 0; i < menuItems.length; i++) {
//         if (menuItems[i].getAttribute('href') === currentPath) {
//             menuItems[i].classList.add('current-page');
//         } else {
//             menuItems[i].classList.remove('current-page');
        
//         }

//     }
// }

document.addEventListener('DOMContentLoaded', function () {
    const path = window.location.pathname;

    const homeLink = document.querySelector('.nav__link[href="./index.html"]');
    console.log(homeLink);
    const shoppingListLink = document.querySelector('.nav__link[href="./shopping-list.html"]');

    if (path === '/index.html' || path === '/') {
        homeLink.classList.add('current-page');
        shoppingListLink.classList.remove('current-page');
    } else if (path === '/shopping-list.html') {
        homeLink.classList.remove('current-page');
        shoppingListLink.classList.add('current-page');
    }
});