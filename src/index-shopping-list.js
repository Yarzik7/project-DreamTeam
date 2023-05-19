import('./js/support');
import('./js/shoplist');
import('./js/pagination');
import('./js/burgerMenu');
import('./js/themes');
import { changeCurrentPageOnShoppingList } from './js/currentPage';
import { setTheme, activateThemeSwitch } from './js/themes';

changeCurrentPageOnShoppingList();

const pageEl = document.querySelector('body');

setTheme(pageEl);

pageEl.addEventListener('click', event => {
  activateThemeSwitch(event, pageEl);
});
