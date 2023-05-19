import { AxiosApi } from '../api/fetchBooks';

import { createPopupCard } from './marcupForPopUp';

const axiosApi = new AxiosApi();
const LOCALSTORAGE_KEY = 'books';

const htmlEl = document.querySelector('html');
const popupModal = document.createElement('div');
popupModal.classList.add('backdrop');

const chosenBook = document.querySelector('.js-all-books');

let bookInStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
let idBook = null;

/**
 * Get Books From Storage
 * @returns array
 */
const getBooksFromStorage = () => {
  try {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

/**
 * Add listener for Escape key
 * @param {keydown} evt
 */
const onEscape = evt => {
  if (evt.key !== 'Escape') {
    return;
  }
  animationCloseModal();
};

/**
 * Fetch book from backend, render HTML
 * @param {*} e
 * @returns
 */
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

    //Add HTML render for modal window, check class hidden in text congratulation
    popupModal.innerHTML = createPopupCard(nodeEl, check);
    let textCongrats = popupModal.querySelector('.pop-up__congratulations');
    if (checkBookInStorage(idBook)) {
      textCongrats.classList.remove('hidden');
    } else {
      textCongrats.classList.add('hidden');
    }
    document.body.appendChild(popupModal);

    //Stop scrolling body
    htmlEl.classList.add('scrollable');

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

//Close modal window, remove event listeners
function onCloseByButton(evt) {
  if (!evt.target) {
    return;
  }
  animationCloseModal();
}

// Close By Click on Backdrop
function onCloseByClickBackdrop(evt) {
  if (!evt.target.classList.contains('backdrop')) {
    return;
  }
  animationCloseModal();
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

function animationCloseModal() {
  document.querySelector('.pop-up').classList.add('pop-up__close');
  const backdropCloseEl = document.querySelector('.backdrop');
  backdropCloseEl.classList.add('backdrop__close');

  setTimeout(() => {
    backdropCloseEl.classList.remove('backdrop__close');
    document.body.removeChild(popupModal);
    htmlEl.classList.remove('scrollable');
    document.removeEventListener('keydown', onEscape);
  }, 200);
}

chosenBook.addEventListener('click', onClick);
