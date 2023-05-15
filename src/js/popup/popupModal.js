import { AxiosApi } from '../api/fetchBooks';
import saveStorageHandler from './localStorageHandler';

const axiosApi = new AxiosApi();
const LOCALSTORAGE_KEY = 'books';
const popupModal = document.createElement('div');
const chosenBook = document.querySelector('.js-all-books');

chosenBook.addEventListener('click', onClick);

async function onClick(e) {
  const idBook = e.target.parentElement.dataset.id;

  try {
    const responce = await axiosApi.getShops(idBook);
    const nodeEl = responce.data;

    popupModal.innerHTML = createPopupCard(nodeEl);
    document.body.appendChild(popupModal);

    const addHandler = popupModal.querySelector('.js-add-storage');

    addHandler.addEventListener('click', addToCart(e, nodeEl));

    const btnPopupClose = popupModal.querySelector('.js-popup-close');

    btnPopupClose.addEventListener('click', onClose);
  } catch (error) {
    console.log(error);
  }
}

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
        <svg width="16" height="15"></svg>
        <use href="./images/sprite.svg#icon-x-close"></use>
        </svg>
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

function createShopLinks(buyLinks) {
  const markupShops = buyLinks
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

function addToCart(e, value) {
  console.log(value);

  saveStorageHandler(LOCALSTORAGE_KEY, value);
}

function onClose(evt) {
  if (!evt.target) {
    return;
  } else {
    document.body.removeChild(popupModal);
  }
}
