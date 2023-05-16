import { AxiosApi } from '../api/fetchBooks';
import saveStorageHandler from './localStorageHandler';
import { createPopupCard } from './marcupForPopUp';

const axiosApi = new AxiosApi();
const LOCALSTORAGE_KEY = 'books';

const popupModal = document.createElement('div');
popupModal.classList.add('backdrop');

const chosenBook = document.querySelector('.js-all-books');

let bookInStorage = [];
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

    //Adds HTML render for modal window
    popupModal.innerHTML = createPopupCard(nodeEl, check);
    document.body.appendChild(popupModal);

    //Button for adding books to bascket(cart)
    const addHandler = popupModal.querySelector('.js-add-storage');
    addHandler.addEventListener('click', evt => {addBookToShoppingList(idBook, evt)});

    //Close modal window button
    const btnPopupClose = popupModal.querySelector('.js-popup-close');
    btnPopupClose.addEventListener('click', onClose);

    //Close modal by click on backdrop
    popupModal.addEventListener('click', onCloseByClickBackdrop);

  } catch (error) {
    console.log(error);
  }
}

//Closes modal window, removes event listeners
function onClose(evt) {
  if (!evt.target) {
    return;
  } 

  document.body.removeChild(popupModal);
  document.removeEventListener('keydown', onEscape);
}

// Close By Click on Backdrop
function onCloseByClickBackdrop(evt) {
  if (!evt.target.classList.contains('backdrop')) {
    return
  };
  
  document.body.removeChild(popupModal);
  document.removeEventListener('keydown', onEscape);
}

//Adds book to shopping cart(bascket)
function addBookToShoppingList(idBook, evt) {
  evt.target.blur();

  if (checkBookInStorage(idBook)) {
    removeBookFromShopingList(idBook);
    evt.target.textContent = 'ADD TO SHOPPING LIST';
    return;
  }

  bookInStorage.push(idBook);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(bookInStorage));
  evt.target.textContent = 'REMOVE FROM THE SHOPPING LIST';
}

//Removes book from shopping cart(bascket)
function removeBookFromShopingList(idBook) {
  let arrBooks = getBooksFromStorage().filter(item => item !== idBook); // (JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? []) === getBooksFromStorage()
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(arrBooks));
}



function checkBookInStorage(idBook) {
  // bookInStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) ?? [];
  return getBooksFromStorage().includes(idBook);
}

chosenBook.addEventListener('click', onClick);
