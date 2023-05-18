import { AxiosApi } from '../api/fetchBooks';

import { createPopupCard } from './marcupForPopUp';

const axiosApi = new AxiosApi();
const LOCALSTORAGE_KEY = 'books';

const popupModal = document.createElement('div');
popupModal.classList.add('backdrop');

const chosenBook = document.querySelector('.js-all-books');

let bookInStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
let idBook = null;

// Get Books From Storage
const getBooksFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

//Adds listener for Escape key
const onEscape = evt => {
  if (evt.key === 'Escape') {
    document.body.removeChild(popupModal);
    document.body.style.overflow = 'visible';
    document.removeEventListener('keydown', onEscape);
  }
};

async function onClick(e) {
  const currentEl = e.target.parentElement;

  if (!currentEl.classList.contains('js-book')) {
    return;
  }

  idBook = e.target.parentElement.dataset.id;

  document.addEventListener('keydown', onEscape);

  let check = checkBookInStorage(idBook)
    ? 'REMOVE FROM THE SHOPPING LIST'
    : 'ADD TO SHOPPING LIST';

  try {
    //Fetchs books from backend
    const responce = await axiosApi.getShops(idBook);
    const nodeEl = responce.data;

    //Adds HTML render for modal window, checks class hidden in text congratulation
    popupModal.innerHTML = createPopupCard(nodeEl, check);
    let textCongrats = popupModal.querySelector('.pop-up__congratulations');
    if (checkBookInStorage(idBook)) {
      textCongrats.classList.remove('hidden');
    } else {
      textCongrats.classList.add('hidden');
    }
    document.body.appendChild(popupModal);

    //Stops scrolling body
    document.body.style.overflow = 'hidden';

    //Button for adding books to bascket(cart)
    const addHandler = popupModal.querySelector('.js-add-storage');
    addHandler.addEventListener('click', evt => {
      addBookToShoppingList(idBook, evt);
    });

    //Close modal window button
    const btnPopupClose = popupModal.querySelector('.js-popup-close');
    btnPopupClose.addEventListener('click', onCloseByButton);

    //Close modal by click on backdrop
    popupModal.addEventListener('click', onCloseByClickBackdrop);
  } catch (error) {
    console.log(error);
  }
}

//Closes modal window, removes event listeners
function onCloseByButton(evt) {
  if (!evt.target) {
    return;
  }

  document.body.removeChild(popupModal);
  document.body.style.overflow = 'visible';
  document.removeEventListener('keydown', onEscape);
}

// Close By Click on Backdrop
function onCloseByClickBackdrop(evt) {
  if (!evt.target.classList.contains('backdrop')) {
    return;
  }

  document.body.removeChild(popupModal);
  document.body.style.overflow = 'visible';
  document.removeEventListener('keydown', onEscape);
}

//Adds book to shopping cart(bascket)
function addBookToShoppingList(idBook, evt) {
  evt.target.blur();

  const textCongrats = popupModal.querySelector('.pop-up__congratulations');

  if (checkBookInStorage(idBook)) {
    textCongrats.classList.add('hidden');
    removeBookFromShoppingList(idBook);

    evt.target.textContent = 'ADD TO SHOPPING LIST';

    return;
  } else {
    textCongrats.classList.remove('hidden');
    bookInStorage.push(idBook);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(bookInStorage));
    evt.target.textContent = 'REMOVE FROM THE SHOPPING LIST';
  }
}

//Removes book from shopping list
function removeBookFromShoppingList(idBook) {
  bookInStorage = getBooksFromStorage().filter(item => item !== idBook);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(bookInStorage));

  return;
}

function checkBookInStorage(idBook) {
  return getBooksFromStorage().includes(idBook);
}

chosenBook.addEventListener('click', onClick);
