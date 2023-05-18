import('./js/loaderClass');
import('./js/loaderMarcup');
// import('./js/loader');
import('./js/category');
import('./js/support');
import('./js/popup/popupModal');
import('./js/scrollup');
import('./js/api/topBooks');
import('./js/burgerMenu');
import('./js/currentPage');
// import('./js/loader');
import('./js/api/topBooks');
import('./js/themes');
import('./js/form');

import { setTheme, activateThemeSwitch } from './js/themes';
const pageEl = document.querySelector('html');

setTheme(pageEl);

pageEl.addEventListener('click', event => {
  activateThemeSwitch(event, pageEl);
});
const refs = {
  booksListEl: document.querySelector('.js-all-books'),
};

// Все, що в блоці TEST призначене тільки для тесту і демонстрації, а отже за потреби цим можна знехтувати і прибрати
/////////////////////////////////////////////////////////////////////////////TEST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { topBooksContainerMarcup } from './js/topBooksContainerMarcup';
import { topBooksData } from './js/testFiles/testData(Yaroslav)';

// refs.booksListEl.innerHTML = topBooksData
//   .map(category => topBooksContainerMarcup(category, refs.booksListEl))
//   .join('');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
