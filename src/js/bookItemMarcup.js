/**
 * Функція повертає розмітку однієї картки книги
 * @param {object} - об'єкт параметрів книги
 * @returns {string} - розмітка однієї картки книги
 */
const bookItemMarcup = ({ author, book_image, title, _id }) => {
  return `
  <li class="category__book js-book" data-id="${_id}">
    <div class="category__image-box">
      <img class="category__img" src="${book_image}" alt="${title}">
      <p class="category__image-overlay">Quick view</p>
    </div>
    <h2 class="category__title">${title}</h2>
    <h3 class="category__subtitle">${author}</h3>
  </li>`;
};

export { bookItemMarcup };