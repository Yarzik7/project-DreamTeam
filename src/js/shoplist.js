import localStoragemethod from '../js/storage-methods';
import axios from 'axios';
import { pagination, sliceOnGroup } from './pagination';
import markupBooksInBasket from './markupBooksInBasket';

const bookListEl = document.querySelector('.shopinlist__cards');
const notificationContainerEl = document.querySelector('.shoplist__info');
const shoppingTitle = document.querySelector('.basket__title');
const container = document.querySelector('#pagination');

const LOCALSTORAGE_KEY = 'books';
let bookList = localStoragemethod.load('books');
const ITEM_PER_PAGE = window.innerWidth < 768 ? 4 : 3;

renderBooks(bookList);

async function renderBooks(data) {
  if (data.length) {
    removeEmptyNotificationContainer();

    const currentData = data.slice(0, ITEM_PER_PAGE);

    const arrBooks = await currentData.map(async id => {
      const data = await axios.get(
        `https://books-backend.p.goit.global/books/${id}`
      );
      return await data.data;
    });
    const arrResult = (await Promise.allSettled(arrBooks)).map(el => el.value);

    bookListEl.innerHTML = markupBooksInBasket(arrResult);
    bookListEl.addEventListener('click', onBasketClick);
  } else {
    pasteEmptyNotificationContainer();
  }
}

function pasteEmptyNotificationContainer() {
  bookListEl.innerHTML = '';
  notificationContainerEl.classList.add('js-empty');
  shoppingTitle.style.marginBottom = '140px';
}

function removeEmptyNotificationContainer() {
  notificationContainerEl.classList.remove('js-empty');
  shoppingTitle.style.marginBottom = '';
  removeEventListener('click', onBasketClick);
}

function onBasketClick(event) {
  const bntCloseEl = event.target.closest('.shopinlist__btn');
  const cardEl = event.target.closest('.shopinlist__card');

  if (!bntCloseEl) {
    return;
  }

  const arrSlice = sliceOnGroup(bookList, ITEM_PER_PAGE);

  bookList = bookList.filter(item => item !== cardEl.dataset.id);

  localStoragemethod.save(LOCALSTORAGE_KEY, bookList);

  bntCloseEl.style.display = 'none';

  if (!bookList.length) {
    pasteEmptyNotificationContainer();
    return;
  } else {
    const currentPage =
      arrSlice[pagination.getCurrentPage() - 1].length === 1 ? 1 : 0;
    pagination.movePageTo(pagination.getCurrentPage() - currentPage);

    bookList.length <= ITEM_PER_PAGE
      ? container.classList.add('disabled')
      : null;
  }
}
