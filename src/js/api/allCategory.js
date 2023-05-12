const LINK_All_CATEGORY =
  'https://books-backend.p.goit.global/books/category-list';

function getAllCategory() {
  return fetch(LINK_All_CATEGORY).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

export default getAllCategory;
