import { bookItemMarcup } from "./bookItemMarcup";
 
const createTopBooksMarcup = (books) => books.map(book => bookItemMarcup(book)).join('');

const topBooksContainerMarcup = ({ list_name, books }) => {
  return `
<li>
  <h3 class="">${list_name}</h3>
  <ul class="">${createTopBooksMarcup(books)}</ul>
  <button class="">See more</button>
</li>`;
};

export { topBooksContainerMarcup };