import('./js/loader');
import('./js/category');
import('./js/support');
import('./js/popup/popupModal');
import('./js/scrollup');
import('./js/loader');
import('./js/api/topBooks');

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
