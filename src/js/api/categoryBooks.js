import axios from 'axios';

const LINK_ONE_CATEGORY =
  'https://books-backend.p.goit.global/books/category?category=';

/**
 * Get all books with category
 * @param {String} categoryName
 * @returns Array with books
 */
async function getAllBooks(categoryName) {
  return axios.get(LINK_ONE_CATEGORY + categoryName).then(resp => resp.data);
}

export default getAllBooks;
