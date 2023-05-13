import getAllCategory from './api/categoryList';
import getAllBooks from './api/categoryBooks';

const refs = {
  categoryListEl: document.querySelector('.js-list-categories'),
  booksEl: document.querySelector('.js-all-books'),
  categoryNameEl: document.querySelector('.js-category-name'),
};

getAllCategory().then(data => {
  const sortArr = data.sort((a, b) => a.list_name.localeCompare(b.list_name));
  refs.categoryListEl.insertAdjacentHTML(
    'beforeend',
    markupAllCategories(sortArr)
  );
});

refs.categoryListEl.addEventListener('click', onClick);

async function onClick(e) {
  if (e.target.classList[0] !== 'categories__item') {
    return;
  }

  markupNameCategory(e.target.textContent);

  refs.categoryListEl
    .querySelector('.categories__current')
    .classList.remove('categories__current');
  e.target.classList.add('categories__current');

  refs.categoryNameEl.scrollIntoView({
    behavior: 'smooth',
  });

  refs.booksEl.innerHTML = markupBooks(await getAllBooks(e.target.textContent));
  refs.booksEl.classList.add('category__list');
}

/**
 * Markup categories in sidebar
 * @param {Array} arr
 * @returns string
 */
function markupAllCategories(arr) {
  return arr
    .map(({ list_name }) => `<li class="categories__item">${list_name}</li>`)
    .join('');
}

/**
 * Markup books in main content
 * @param {Array} data
 * @returns String
 */
function markupBooks(data) {
  return data
    .map(
      ({ author, book_image, title, _id }) => `
  <li data-id="${_id}" class="category__book js-book">
    <img class="category__img" src="${book_image}" alt="${title}">
    <h2 class="category__title">${title}</h2>
    <h3 class="category__subtitle">${author}</h3>
  </li>
  `
    )
    .join('');
}

/**
 * Markup name category in main content
 * @param {String} name
 */
function markupNameCategory(name) {
  const categoryName = name.split(' ');
  const categoryNameOne = categoryName
    .splice(0, categoryName.length - 1)
    .join(' ');
  const categoryNameTwo = categoryName.at(-1);

  refs.categoryNameEl.textContent = categoryNameOne + ' ';
  refs.categoryNameEl.insertAdjacentHTML(
    'beforeend',
    `<span class="category_name category__name--violet">${categoryNameTwo}</span>`
  );
}

// ===================test=========================
refs.booksEl.addEventListener('click', test);

async function test(e) {
  if (!e.target.classList.contains('button')) {
    return;
  }
  const nameCategory = e.target.parentElement.querySelector(
    '.category-top-books__title'
  ).textContent;

  refs.categoryNameEl.scrollIntoView({
    behavior: 'smooth',
  });

  markupNameCategory(nameCategory);

  [...refs.categoryListEl.children].forEach(e => {
    if (e.textContent === nameCategory) {
      e.classList.add('categories__current');
    } else if (e.classList.contains('categories__current')) {
      e.classList.remove('categories__current');
    }
  });

  refs.booksEl.innerHTML = markupBooks(await getAllBooks(nameCategory));
  refs.booksEl.classList.add('category__list');
}
