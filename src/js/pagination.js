import Pagination from 'tui-pagination';
import '/node_modules/tui-pagination/dist/tui-pagination.min.css';
import axios from 'axios';

const container = document.querySelector('#pagination');
const listEl = document.querySelector('.shopinlist__cards');

const arrBooks = [
  '643282b1e85766588626a085',
  '643282b1e85766588626a0b2',
  '643282b1e85766588626a0d2',
  '643282b2e85766588626a0f2',
  '643282b2e85766588626a112',
  '643282b2e85766588626a132',
  '643282b2e85766588626a152',
  '643282b2e85766588626a172',
  '643282b3e85766588626a180',
  '643282b3e85766588626a1a0',
  '643282b3e85766588626a1c2',
  '643282b3e85766588626a1da',
  '643282b3e85766588626a1ee',
  '643282b3e85766588626a202',
  '643282b3e85766588626a216',
];

const ITEM_PER_PAGE = 3;

const sliceArr = sliceOnGroup(arrBooks, ITEM_PER_PAGE);

function sliceOnGroup(arr, countGroup) {
  var arrTotal = [];
  for (let i = 0; i < arr.length; i += countGroup) {
    var arrRes = arr.slice(i, i + countGroup);
    arrTotal.push(arrRes);
  }
  return arrTotal;
}

const options = {
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

// ===================================test============================
const pagination = new Pagination(container, options);

pagination.setTotalItems(arrBooks.length);

pagination.on('afterMove', test);

async function test(e) {
  const booksList = await sliceArr[e.page - 1].map(async id => {
    const data = await axios.get(
      `https://books-backend.p.goit.global/books/${id}`
    );
    return await data.data;
  });
  const test = await Promise.allSettled(booksList);
  const result = test
    .map(
      ({ value }) => `
  <li data-id="${value._id}" class="category__book js-book">
    <img class="category__img" src="${value.book_image}" alt="${value.title}">
    <h2 class="category__title">${value.title}</h2>
    <h3 class="category__subtitle">${value.author}</h3>
  </li>
  `
    )
    .join('');
  listEl.innerHTML = result;
}
