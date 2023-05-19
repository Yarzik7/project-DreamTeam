import('./js/loaderClass');
import('./js/loaderMarcup');

import('./js/category');
import('./js/support');
import('./js/popup/popupModal');
import('./js/scrollup');

// import('./js/burgerMenu');

import('./js/burgerMenu');

import('./js/api/topBooks');
import('./js/burgerMenu');

import('./js/currentPage');

import('./js/api/topBooks');
import('./js/themes');

import('./js/firebase');

import('./js/form');
import('./js/autorithation')

import { changeCurrentPageOnHomePage } from './js/currentPage';
import { setTheme, activateThemeSwitch } from './js/themes';
const pageEl = document.querySelector('body');

setTheme(pageEl);

pageEl.addEventListener('click', event => {
  activateThemeSwitch(event, pageEl);
});
const refs = {
  booksListEl: document.querySelector('.js-all-books'),
};

changeCurrentPageOnHomePage();
// Все, що в блоці TEST призначене тільки для тесту і демонстрації, а отже за потреби цим можна знехтувати і прибрати
/////////////////////////////////////////////////////////////////////////////TEST///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { topBooksContainerMarcup } from './js/topBooksContainerMarcup';
import { topBooksData } from './js/testFiles/testData(Yaroslav)';

// refs.booksListEl.innerHTML = topBooksData
//   .map(category => topBooksContainerMarcup(category, refs.booksListEl))
//   .join('');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
