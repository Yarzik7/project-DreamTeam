import('./js/support');
import('./js/shoplist');
import('./js/pagination');
import('./js/burgerMenu');
import('./js/currentPage');
import('./js/themes');
import { setTheme, activateThemeSwitch } from './js/themes';

const pageEl = document.querySelector('html');

setTheme(pageEl);

pageEl.addEventListener('click', event => {

  activateThemeSwitch(event, pageEl);
});