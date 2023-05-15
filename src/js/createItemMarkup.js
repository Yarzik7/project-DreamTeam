/**
 *З масиву робить розмітку кожної книги
 * @param {array} масив
 * @returns розмітка однієї книги
 */

function createItemMarkup(array) {
  return array
    .map(({ author, book_image, title, _id }) => {
      return `
  <li class="category__book" data-id="${_id}">
    <img class="category__img" src="${book_image}" alt="${title}" width="180">
    <h2 class="category__title">${title}</h2>
    <h3 class="category__subtitle">${author}</h3>
  </li>
  `;
    })
    .join('');
}

export { createItemMarkup };
