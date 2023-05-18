import { getRequest } from '../api/getRequest';
import { topBooksContainerMarcup } from '../topBooksContainerMarcup';
// import { showLoader, hideLoader } from '../loader';

const refs = {
  ul: document.querySelector('.js-all-books'),
};

const URL_TOP_BOOKS = `https://books-backend.p.goit.global/books/top-books?`;

async function getBooks() {
  try {
    // showLoader();
    const books = await getRequest(`${URL_TOP_BOOKS}`);

    const array = books.map(topBooksContainerMarcup).join('');

    refs.ul.classList.remove('category__list');
    refs.ul.innerHTML = array;
  } catch (error) {
    console.log(error);
  } finally {
    // hideLoader();
  }
}

getBooks();

export default getBooks;
