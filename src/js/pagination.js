import Pagination from '/node_modules/tui-pagination';
import '/node_modules/tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
import markupBooksInBasket from './markupBooksInBasket';
import localStoragemethod from './storage-methods';

const container = document.querySelector('#pagination');
const listEl = document.querySelector('.shopinlist__cards');

const arrBooksStorage = localStoragemethod.load('books');

let ITEM_PER_PAGE = window.innerWidth < 768 ? 4 : 3;
let VISIBLE_PAGES = window.innerWidth < 768 ? 2 : 3;

if (arrBooksStorage.length > ITEM_PER_PAGE) {
  container.classList.remove('disabled');
}

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
    page: '<a href="#" class="pagination__page-btn pagination__number">{{page}}</a>',
    currentPage:
      '<strong class="pagination__page-btn pagination__current-page">{{page}}</strong>',
    moveButton:
      '<a href="#" class="pagination__page-btn pagination__{{type}}">' +
      '<span class="pagination__ico-{{type}}"></span>' +
      '</a>',
    disabledMoveButton:
      '<span class="pagination__page-btn pagination__is-disabled pagination__{{type}}">' +
      '<span class="pagination__ico-{{type}}"></span>' +
      '</span>',
    moreButton:
      '<a href="#" class="pagination__page-btn pagination__{{type}}-is-ellip">' +
      '<span class="pagination__ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

function sliceOnGroup(arr, countGroup) {
  var arrTotal = [];
  for (let i = 0; i < arr.length; i += countGroup) {
    var arrRes = arr.slice(i, i + countGroup);
    arrTotal.push(arrRes);
  }
  return arrTotal;
}

pagination.on('afterMove', onMove);

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
  listEl.innerHTML = markupBooksInBasket(arrResult);
}

function isCurrentPage(page) {
  const lastPage = container.querySelector(
    '.pagination__last-child'
  ).textContent;
  if (page === Number(lastPage)) {
    container.classList.add('pagination__reverse');
  } else {
    container.classList.remove('pagination__reverse');
  }
}

export { pagination, sliceOnGroup };
