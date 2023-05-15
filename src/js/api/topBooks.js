import { getRequest } from '../api/getRequest';
import { topBooksContainerMarcup } from '../topBooksContainerMarcup';
import { showLoader, hideLoader } from '../loader';

const REFS = {
  ul: document.querySelector('.js-all-books'),
};

const URL_TOP_BOOKS = `https://books-backend.p.goit.global/books/top-books?`;

async function getBooks() {
    try {
      showLoader();
      const BOOKS = await getRequest(`${URL_TOP_BOOKS}`);

      const ARRAY = BOOKS.map(topBooksContainerMarcup).join('');

      REFS.ul.classList.remove('category__list');
      REFS.ul.innerHTML = ARRAY;
    } catch (error) {
      console.log(error);
    } finally {
      hideLoader();
    }
}

getBooks();
