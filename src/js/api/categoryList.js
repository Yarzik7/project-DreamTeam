import axios from 'axios';

const LINK_All_CATEGORY =
  'https://books-backend.p.goit.global/books/category-list';

/**
 * Get array with all categories
 * @returns Array
 */
function getAllCategory() {
  return axios.get(LINK_All_CATEGORY).then(resp => resp.data);
}

export default getAllCategory;
