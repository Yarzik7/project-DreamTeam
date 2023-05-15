import Pagination from 'tui-pagination';
import '/node_modules/tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';
import markupBooksInBasket from './shoplist';
import localStoragemethod from '../js/storage-methods';

const container = document.querySelector('#pagination');
const listEl = document.querySelector('.shopinlist__cards');

const arrBooksTest = localStoragemethod.load('books');
console.log(arrBooksTest);

let ITEM_PER_PAGE = window.innerWidth < 768 ? 4 : 3;

console.log(arrBooksTest.length);

if (arrBooksTest.length > ITEM_PER_PAGE) {
  container.classList.remove('disabled');
}

const options = {
  totalItems: arrBooksTest.length,
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

// const sliceArr = sliceOnGroup(arrBooksTest, ITEM_PER_PAGE);

function sliceOnGroup(arr, countGroup) {
  var arrTotal = [];
  for (let i = 0; i < arr.length; i += countGroup) {
    var arrRes = arr.slice(i, i + countGroup);
    arrTotal.push(arrRes);
  }
  return arrTotal;
}

// ===================================test============================

pagination.on('afterMove', test);

async function test(e) {
  const arrBooks = localStoragemethod.load('books');
  const result = sliceOnGroup(arrBooks, ITEM_PER_PAGE);
  const booksList = await result[e.page - 1].map(async id => {
    const data = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return await data.data;
  });
  const test = (await Promise.allSettled(booksList)).map(el => el.value);
  console.log(test);
  // const result = test
  //   .map(
  //     ({ value }) => `
  // <li data-id="${value._id}" class="category__book js-book">
  //   <img class="category__img" src="${value.book_image}" alt="${value.title}">
  //   <h2 class="category__title">${value.title}</h2>
  //   <h3 class="category__subtitle">${value.author}</h3>
  // </li>
  // `
  //   )
  //   .join('');
  listEl.innerHTML = markupBooksInBasket(test);
}

export default pagination;
