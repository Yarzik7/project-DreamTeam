import getAllCategory from './api/categoryList';
import getAllBooks from './api/categoryBooks';
import { bookItemMarcup } from './bookItemMarcup';
import getBooks from './api/topBooks';
import { Loader } from './loaderClass';

const refs = {
  categoryListEl: document.querySelector('.js-list-categories'),
  booksEl: document.querySelector('.js-all-books'),
  categoryNameEl: document.querySelector('.js-category-name'),
  sectionCategory: document.querySelector('.category > .container'),
};

// Function for marcup categories on sidebar
getAllCategory().then(data => {
  refs.categoryListEl.insertAdjacentHTML(
    'beforeend',
    markupAllCategories(data)
  );
});

refs.categoryListEl.addEventListener('click', onClick);
refs.booksEl.addEventListener('click', onClickButton);

/**
 * After click on 'categoryListEl'
 * @param {HTMLUListElement} e
 * @returns null
 */
async function onClick(e) {
  if (e.target.classList.contains('js-category')) {
    changeClassCurrentCategory(e.target);
    scrollUp();
    markupNameCategory(e.target.textContent);

    refs.booksEl.innerHTML = '';
    const loader = new Loader(refs.sectionCategory, 'loader-container');
    loader.show();

    refs.booksEl.innerHTML = markupBooks(
      await getAllBooks(e.target.textContent)
    );

    loader.hide();

    refs.booksEl.classList.add('category__list');
  } else if (e.target.classList.contains('js-main-category')) {
    changeClassCurrentCategory(e.target);
    scrollUp();
    markupNameCategory('Best Sellers Books');

    refs.booksEl.innerHTML = '';

    getBooks();
  }

  return;
}

/**
 * Markup categories in sidebar
 * @param {Array} arr
 * @returns string
 */
function markupAllCategories(arr) {
  return arr
    .map(
      ({ list_name }) =>
        `<li class="categories__item js-category">${list_name}</li>`
    )
    .join('');
}

/**
 * After click on category in sidebar, scroll to up (mobile, tablet)
 */
function scrollUp() {
  if (window.innerWidth < 1440) {
    refs.categoryNameEl.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

/**
 * Change current category after click
 * @param {HTMLLIElement} target
 */
function changeClassCurrentCategory(target) {
  refs.categoryListEl
    .querySelector('.categories__current')
    .classList.remove('categories__current');
  target.classList.add('categories__current');
}

/**
 * Markup books in main content
 * @param {Array} data
 * @returns String
 */
function markupBooks(data) {
  return data.map(bookItemMarcup).join('');
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

/**
 * After click on button "See more", marcup all books with cirrent category on main contant
 * @param {HTMLUListElement} e
 * @returns null
 */
async function onClickButton(e) {
  if (!e.target.classList.contains('js-action-button')) {
    return;
  }
  const nameCategory = e.target.dataset.categoryname;

  if (window.innerWidth < 1440) {
    scrollUp();
  } else {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  markupNameCategory(nameCategory);

  [...refs.categoryListEl.children].forEach(e => {
    if (e.textContent === nameCategory) {
      e.classList.add('categories__current');
    } else if (e.classList.contains('categories__current')) {
      e.classList.remove('categories__current');
    }
  });

   refs.booksEl.innerHTML = '';
   const loader = new Loader(refs.sectionCategory, 'loader-container');
   loader.show();

  refs.booksEl.innerHTML = markupBooks(await getAllBooks(nameCategory));

  loader.hide();
  refs.booksEl.classList.add('category__list');
}
