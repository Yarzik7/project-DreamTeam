import { getRequest } from '../api/getRequest';
import { createItemMarkup } from '../createItemMarkup';

const REFS = {
  ul: document.querySelector('.js-all-books'),
};

const URL_TOP_BOOKS = `https://books-backend.p.goit.global/books/top-books?`;

async function getBooks() {
  const BOOKS = await getRequest(`${URL_TOP_BOOKS}`);

  const ARRAY = BOOKS.map(({ list_name, books }) => {
    return `
      <li class="category-top-books">
        <h3 class="category-top-books__title">${list_name}</h3>
        <ul class="category-top-books__list">${createItemMarkup(books)}</ul>
        <button class="action-button category-top-books__action-button" data-categoryName="${list_name}">See more</button>
      </li>`;
  }).join('');

  REFS.ul.classList.remove('category__list');
  REFS.ul.innerHTML = ARRAY;
}

getBooks();
