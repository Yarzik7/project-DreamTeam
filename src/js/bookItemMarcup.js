const bookItemMarcup = ({ author, book_image, title }) => {
  return `
  <li class="category__book">
    <img class="category__img" src="${book_image}" alt="${title}">
    <h2 class="category__title">${title}</h2>
    <h3 class="category__subtitle">${author}</h3>
  </li>
  `;
};

export { bookItemMarcup };