const LINK_All_CATEGORY =
  'https://books-backend.p.goit.global/books/category-list';
const LINK_ONE_CATEGORY =
  'https://books-backend.p.goit.global/books/category?category=';

const categoryEl = document.querySelector('.js-list-category');
const booksEl = document.querySelector('.js-all-books');

fetch(LINK_All_CATEGORY)
  .then(resp => resp.json())
  .then(data => {
    const sortArr = data.sort((a, b) => a.list_name.localeCompare(b.list_name));
    const arr = sortArr
      .map(({ list_name }) => `<li class="list">${list_name}</li>`)
      .join('');
    categoryEl.insertAdjacentHTML('beforeend', arr);
  });

categoryEl.addEventListener('click', onClick);

function onClick(e) {
  if (e.target.classList[0] !== 'list') {
    return;
  }
  const categoryName = e.target.textContent.split(' ');
  const categoryNameOne = categoryName
    .splice(0, categoryName.length - 1)
    .join(' ');
  const categoryNameTwo = categoryName.at(-1);
  booksEl.insertAdjacentHTML(
    'beforebegin',
    `<h2 class="category_name">${categoryNameOne}
      <span class="category_name color_violet">${categoryNameTwo}
      </span>
    </h2>`
  );
  categoryEl
    .querySelector('.js-current-category')
    .classList.remove('js-current-category');
  e.target.classList.add('js-current-category');
  fetch(LINK_ONE_CATEGORY + e.target.textContent)
    .then(resp => resp.json())
    .then(data => {
      booksEl.innerHTML = markupBooks(data);
    });
}

function markupBooks(data) {
  return data
    .map(
      ({ author, book_image, title }) => `
  <li class="book">
    <img class="book__img" src="${book_image}" alt="${title}">
    <h2 class="book__title">${title}</h2>
    <h3 class="book__subtitle">${author}</h3>
  </li>
  `
    )
    .join('');
}
