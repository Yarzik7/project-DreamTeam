import getAllCategory from './api/allCategory';

const LINK_ONE_CATEGORY =
  'https://books-backend.p.goit.global/books/category?category=';

const categoryListEl = document.querySelector('.js-list-categories');
const booksEl = document.querySelector('.js-all-books');
const categoryNameEl = document.querySelector('.js-category-name');

getAllCategory().then(data => {
  const sortArr = data.sort((a, b) => a.list_name.localeCompare(b.list_name));
  categoryListEl.insertAdjacentHTML('beforeend', markupAllCategories(sortArr));
});

categoryListEl.addEventListener('click', onClick);

function markupAllCategories(arr) {
  return arr
    .map(({ list_name }) => `<li class="categories__item">${list_name}</li>`)
    .join('');
}

function onClick(e) {
  if (e.target.classList[0] !== 'categories__item') {
    return;
  }
  const categoryName = e.target.textContent.split(' ');
  const categoryNameOne = categoryName
    .splice(0, categoryName.length - 1)
    .join(' ');
  const categoryNameTwo = categoryName.at(-1);

  categoryNameEl.textContent = categoryNameOne + ' ';
  categoryNameEl.insertAdjacentHTML(
    'beforeend',
    `<span class="category_name category__name--violet">${categoryNameTwo}</span>`
  );

  categoryListEl
    .querySelector('.categories__current')
    .classList.remove('categories__current');
  e.target.classList.add('categories__current');

  categoryNameEl.scrollIntoView({
    behavior: 'smooth',
  });

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
  <li class="category__book">
    <img class="category__img" src="${book_image}" alt="${title}">
    <h2 class="category__title">${title}</h2>
    <h3 class="category__subtitle">${author}</h3>
  </li>
  `
    )
    .join('');
}
