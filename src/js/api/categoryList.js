import axios from 'axios';

const LINK_All_CATEGORY =
  'https://books-backend.p.goit.global/books/category-list';

/**
 * Get sort array with all categories
 * @returns Array with all categories
 */
async function getAllCategory() {
  const data = (await axios.get(LINK_All_CATEGORY)).data;
  const sortArr = data.sort((a, b) => a.list_name.localeCompare(b.list_name));
  return sortArr;
}

export default getAllCategory;
