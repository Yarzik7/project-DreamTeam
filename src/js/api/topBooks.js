import { getRequest } from '../api/getRequest';
import { topBooksContainerMarcup } from '../topBooksContainerMarcup';
import { Loader } from '../loaderClass';

const refs = {
  ul: document.querySelector('.js-all-books'),
  sectionCategory: document.querySelector('.category > .container'),
};

const URL_TOP_BOOKS = `https://books-backend.p.goit.global/books/top-books?`;
let firstLoadPage = true;

async function getBooks() {
  const loader = new Loader(refs.sectionCategory, 'loader-container');

  try {
    loader.show();
    
    const books = await getRequest(`${URL_TOP_BOOKS}`);
    const array = books.map(topBooksContainerMarcup).join('');

    refs.ul.classList.remove('category__list');
    refs.ul.innerHTML = array;
  } catch (error) {
    console.log(error);

  } finally {
    if (firstLoadPage) {
      preLoader.hide();
      firstLoadPage = false;
    }

    loader.hide();
  }
}

const preLoader = new Loader(
  document.querySelector('header'),
  'preloader-page'
);
getBooks();

export default getBooks;
