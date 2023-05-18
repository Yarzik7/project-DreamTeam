import Pagination from '/node_modules/tui-pagination';
import '/node_modules/tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
import markupBooksInBasket from './markupBooksInBasket';
import localStoragemethod from './storage-methods';

const refs = {
  container: document.querySelector('#pagination'),
  listEl: document.querySelector('.shopinlist__cards'),
  titleEl: document.querySelector('.basket__title'),
};

const arrBooksStorage = localStoragemethod.load('books');

let ITEM_PER_PAGE = window.innerWidth < 768 ? 4 : 3;
let VISIBLE_PAGES = window.innerWidth < 768 ? 2 : 3;

if (arrBooksStorage.length > ITEM_PER_PAGE) {
  refs.container.classList.remove('disabled');
}

// Options for pagination
const options = {
  totalItems: arrBooksStorage.length,
  itemsPerPage: ITEM_PER_PAGE,
  visiblePages: VISIBLE_PAGES,
  page: 1,
  centerAlign: false,
  usageStatistics: true,
  firstItemClassName: 'pagination__first-child',
  lastItemClassName: 'pagination__last-child',
  template: {
    page: '<a aria-label="Number page {{page}}" href="#" class="pagination__page-btn pagination__number">{{page}}</a>',
    currentPage:
      '<strong class="pagination__page-btn pagination__current-page">{{page}}</strong>',
    moveButton:
      '<a aria-label="Load {{type}}" href="#" class="pagination__page-btn pagination__{{type}}">' +
      '<span class="pagination__ico-{{type}}"></span>' +
      '</a>',
    disabledMoveButton:
      '<span class="pagination__page-btn pagination__is-disabled pagination__{{type}}">' +
      '<span class="pagination__ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a aria-label="Load more page and move to next page" href="#" class="pagination__page-btn pagination__{{type}}-is-ellip">' +
      '<span class="pagination__ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(refs.container, options);

pagination.on('afterMove', onMove);

/**
 * After move pagination
 * @param {Object} e
 */
async function onMove(e) {
  isCurrentPage(e.page);
  const arrBooks = localStoragemethod.load('books');
  const sliceArr = sliceOnGroup(arrBooks, ITEM_PER_PAGE);
  const booksList = await sliceArr[e.page - 1].map(async id => {
    const data = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return await data.data;
  });
  const arrResult = (await Promise.allSettled(booksList)).map(el => el.value);
  refs.listEl.innerHTML = markupBooksInBasket(arrResult);

  refs.titleEl.scrollIntoView({
    behavior: 'smooth',
  });
}

/**
 * For scss style
 * @param {Number} page
 */
function isCurrentPage(page) {
  const lastPage = refs.container.querySelector(
    '.pagination__last-child'
  ).textContent;
  if (page === Number(lastPage)) {
    refs.container.classList.add('pagination__reverse');
  } else {
    refs.container.classList.remove('pagination__reverse');
  }
}

/**
 * Slice all books id on array with arrays for pagination pages
 * @param {Array} arr
 * @param {Number} countGroup
 * @returns Array with arrays
 */
function sliceOnGroup(arr, countGroup) {
  const arrTotal = [];
  for (let i = 0; i < arr.length; i += countGroup) {
    const arrRes = arr.slice(i, i + countGroup);
    arrTotal.push(arrRes);
  }
  return arrTotal;
}

export { pagination, sliceOnGroup };
