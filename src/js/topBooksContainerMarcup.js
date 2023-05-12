import { bookItemMarcup } from "./bookItemMarcup";
 
const createTopBooksMarcup = (books) => books.map(book => bookItemMarcup(book)).join('');

const topBooksContainerMarcup = ({ list_name, books }, node) => {
  node.classList.remove('category__list');
  return `
<li class="category-top-books">
  <h3 class="category-top-books__title">${list_name}</h3>
  <ul class="category-top-books__list">${createTopBooksMarcup(books)}</ul>
  <button class="button category-top-books__button">See more</button>
</li>`;
};

export { topBooksContainerMarcup };