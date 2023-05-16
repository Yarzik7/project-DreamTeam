import Pagination from '/node_modules/tui-pagination';
import '/node_modules/tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
import markupBooksInBasket from './markupBooksInBasket';
import localStoragemethod from './storage-methods';

const container = document.querySelector('#pagination');
const listEl = document.querySelector('.shopinlist__cards');

const arrBooksStorage = localStoragemethod.load('books');

let ITEM_PER_PAGE = window.innerWidth < 768 ? 4 : 3;

if (arrBooksStorage.length > ITEM_PER_PAGE) {
  container.classList.remove('disabled');
}

const options = {
  totalItems: arrBooksStorage.length,
  itemsPerPage: ITEM_PER_PAGE,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  usageStatistics: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="pagination--magrin tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="pagination--magrin tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
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

export { pagination, sliceOnGroup };
