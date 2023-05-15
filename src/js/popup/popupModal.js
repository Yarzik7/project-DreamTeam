import { AxiosApi } from '../api/fetchBooks';
import saveStorageHandler from './localStorageHandler';

const axiosApi = new AxiosApi();
const LOCALSTORAGE_KEY = 'books';
const popupModal = document.createElement('div');
const chosenBook = document.querySelector('.js-all-books');
let bookInStorage = [];
let idBook = null;
chosenBook.addEventListener('click', onClick);

async function onClick(e) {
  const currentEl = e.target.parentElement;
  if (!currentEl.classList.contains('js-book')) {
    return;
  }

  idBook = e.target.parentElement.dataset.id;
  let check = checkBookInStorage(idBook)
    ? 'REMOVE FROM THE SHOPPING LIST'
    : 'ADD TO SHOPPING LIST';
  console.log(check);

  try {
    //Fetchs books from backend
    const responce = await axiosApi.getShops(idBook);
    const nodeEl = responce.data;

    //Adds HTML render for modal window
    popupModal.innerHTML = createPopupCard(nodeEl);
    document.body.appendChild(popupModal);

    //Button for adding books to bascket(cart)
    const addHandler = popupModal.querySelector('.js-add-storage');
    console.dir(addHandler);

    addHandler.addEventListener('click', evt => {
      addBookToShoppingList(idBook);

      // console.log(idBook);
    });

    //Close modal window button
    const btnPopupClose = popupModal.querySelector('.js-popup-close');
    btnPopupClose.addEventListener('click', onClose);
  } catch (error) {
    console.log(error);
  }
}
// <svg width="16" height="15">
//   <use href="./images/icon-x-close.svg"></use>
// </svg>;
//Creates HTML render for modal window
function createPopupCard({
  author,
  book_image,
  title,
  buy_links,
  list_name,
  description,
}) {
  return `<div class="popup-backdrop">
  <div class="js-popup popup__body">
  <div class="popup__container">
  <button  class="js-popup-close btn__close" type="button">
    <img src="${new URL(`../../images/icon-x-close.svg`, import.meta.url)}">
    </button>
    <div class="popup-book">
    <div class="popup-book__thumb">
        <img class="popup-book__img" src="${book_image}" alt="${title}">
        </div>
    <div class="popup-book__info"
        <h2>${title}</h2>
        <h3>${author}</h3>
        <p>${description}</p>
        <ul class="modal__shops-link">${createShopLinks(buy_links)}</ul>
        </div>
    </div>
    <div>
        <button type="button" class="action-button js-add-storage">add to shoping list</button>
        <p class="popup__text">text</p>
    </div>
    </div>
    </div>
    </div>`;
}

//Creates HTML render of shop links for modal window
function createShopLinks(buyLinks) {
  const filteredShops = buyLinks.filter(
    ({ name }) =>
      name === 'Amazon' || name === 'Apple Books' || name === 'Bookshop'
  );

  const markupShops = filteredShops
    .map(
      ({ name, url }) => `  <li>
                <a href="${url}" target="_blank" rel="noopener noreferrer nofollow">
                    <img src="" alt="${name}">
                </a>
            </li>`
    )
    .join('');
  return markupShops;
}

//Closes modal window, removes event listeners
function onClose(evt) {
  if (!evt.target) {
    return;
  } else {
    document.body.removeChild(popupModal);
    document.removeEventListener('keyup', onEscape);
  }
}

//Adds book to shopping cart(bascket)
function addBookToShoppingList(idBook) {
  if (checkBookInStorage(idBook)) {
    removeBookFromShopingList(idBook);
    return;
  }
  bookInStorage.push(idBook);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(bookInStorage));
  console.log(bookInStorage);
}

//Removes book from shopping cart(bascket)
function removeBookFromShopingList(idBook) {
  let arr = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  arr = arr.filter(item => item !== idBook);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arr));
}

//Adds listener for Escape key
const onEscape = evt => {
  if (evt.key === 'Escape') {
    document.body.removeChild(popupModal);
    document.removeEventListener('keyup', onEscape);
  }
};
document.addEventListener('keydown', onEscape);

function checkBookInStorage(idBook) {
  bookInStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];
  if (!bookInStorage.includes(idBook)) {
    return false;
  }
  return true;
}
