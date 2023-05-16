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

function cutNameCategory(name) {
  if (window.innerWidth <= 768) {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }
  return name;
}

function onBasketClick(event) {
  const target = event.target.closest('.shopinlist__btn');
  const li = target.closest('.shopinlist__card');

  if (!target) {
    return;
  }

  const arrSlice = sliceOnGroup(bookList, ITEM_PER_PAGE);

  bookList = bookList.filter(item => item !== li.dataset.id);

  localStoragemethod.save(LOCALSTORAGE_KEY, bookList);
  li.style.display = 'none';

  if (arrSlice[pagination.getCurrentPage() - 1].length === 1) {
    pagination.movePageTo(pagination.getCurrentPage() - 1);
  } else {
    pagination.movePageTo(pagination.getCurrentPage());
  }

  if (bookList.length <= ITEM_PER_PAGE) {
    container.classList.add('disabled');
  }

  if (bookList.length === 0) {
    pasteEmptyNotificationContainer();
  }
}
