import localStoragemethod from '../js/storage-methods';
import svgDeleteUrl from '../images/sprite.svg';
import amzonimg1 from '../images/shoplist/amazon1x.png';
import amzonimg2 from '../images/shoplist/amazon2x.png';
import appleimg1 from '../images/shoplist/apple1x.png';
import appleimg2 from '../images/shoplist/apple2x.png';
import bookshopimg1 from '../images/shoplist/bookshop1x.png';
import bookshopimg2 from '../images/shoplist/bookshop2x.png';
import axios from 'axios';
import pagination from './pagination';

const LOCALSTORAGE_KEY = 'books';

const bookListEl = document.querySelector('.shopinlist__cards');
const notificationContainerEl = document.querySelector('.shoplist__info');
const shoppingTitle = document.querySelector('.basket__title');
const container = document.querySelector('#pagination');

let bookList = localStoragemethod.load('books');
// console.log(bookList);

// let currentPage = 1;
// let itemsPerPage = 3;
// let bookCount = bookList.length;

// let pagination = getPagination(bookCount, itemsPerPage);
// 	pagination.on('beforeMove', event => {
// 	currentPage = event.page;
// 	renderBooks(bookList, event.page);
// });

renderBooks(bookList);

async function renderBooks(data) {
  if (data.length) {
    removeEmptyNotificationContainer();
    const countItem = window.innerWidth < 768 ? 4 : 3;

    const currentData = data.slice(0, countItem);

    const testOF = await currentData.map(async id => {
      const data = await axios.get(
        `https://books-backend.p.goit.global/books/${id}`
      );
      return await data.data;
    });
    const test = (await Promise.allSettled(testOF)).map(el => el.value);

    bookListEl.innerHTML = markupBooksInBasket(test);
    bookListEl.addEventListener('click', onBasketClick);
  } else {
    pasteEmptyNotificationContainer();
  }
}

function markupBooksInBasket(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        author,
        book_image_width,
        book_image_height,
        title,
        list_name,
        description,
        //   buy_links: [amazon, apple, , , bookshop],
      }) => {
        return `<li class="shopinlist__card" data-id="${_id}">
					<div class="shopinlist__block">
						<div>
							<div class="shopinlist__thumb">
								<img src="${book_image}" alt="${list_name}" class="shopinlist__book-img" width="${book_image_width}" height="${book_image_height}" />
							</div>
							<p class="shopinlist__book-author">${author}</p>
						</div>
						<div class="shopinlist__wrap">
							<h2 class="shopinlist__title">${title}</h2>
							<p class="shopinlist__category">${cutNameCategory(list_name)}</p>
							<p class="shopinlist__book-description--tablet">${
                !description ? 'Info empty!!!' : description
              }</p>
							<ul class="shopinlist__shops">
								<li class="shopinlist__shop">
									<a href="${'amazon.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">
									<img srset="${amzonimg1} 1x, ${amzonimg2} 2x" src="${amzonimg1}" alt="${'amazon.name'}" class="shopinlist__shop-img" width="48" height="15" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'apple.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">
									<img srset="${appleimg1} 1x, ${appleimg2} 2x" src="${appleimg1}" alt="${'apple.name'}" class="shopinlist__shop-img" width="28" height="27" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'bookshop.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">
									<img srset="${bookshopimg1} 1x, ${bookshopimg2} 2x" src="${bookshopimg1}" alt="${'bookshop.name'}" class="shopinlist__shop-img" width="32" height="30" />
									</a>
								</li>
							</ul>
							<div class="shopinlist__wrap-shops--tablet">
							<p class="shopinlist__bookauthor--tablet">${author}</p>
							<ul class="shopinlist__shops--tablet">
								<li class="shopinlist__shop">
									<a href="${'amazon.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Amazon-book site">
									<img srset="${amzonimg1} 1x, ${amzonimg2} 2x" src="${amzonimg1}" alt="${'amazon.name'}" class="shopinlist__shop-img" width="48" height="15" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'apple.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Apple-book site">
									<img srset="${appleimg1} 1x, ${appleimg2} 2x" src="${appleimg1}" alt="${'apple.name'}" class="shopinlist__shop-img" width="28" height="27" />
									</a>
								</li>
								<li class="shopinlist__shop">
									<a href="${'bookshop.url'}" class="shopinlist__shop-link" target="_blank" crossorigin="anonymous" rel="noopener noreferrer" aria-label="Book-shop site">
									<img srset="${bookshopimg1} 1x, ${bookshopimg2} 2x" src="${bookshopimg1}" alt="${' bookshop.name'}" class="shopinlist__shop-img" width="32" height="30" />
									</a>
								</li>
							</ul>
							</div>
						</div>
					</div>
					<button type="button" class="shopinlist__btn" arial-label="Delete the book from shopping list">
						<svg class="shopinlist__btn-icon" width="15" height="15">
							<use href="${svgDeleteUrl}#icon-dump"></use>
						</svg>
					</button
			</li>`;
      }
    )
    .join('');
}

function pasteEmptyNotificationContainer() {
  bookListEl.innerHTML = '';
  notificationContainerEl.classList.add('js-empty');
  shoppingTitle.style.marginBottom = '140px';
}

function removeEmptyNotificationContainer() {
  notificationContainerEl.classList.remove('js-empty');
  shoppingTitle.style.marginBottom = '';
  removeEventListener('click', onBasketClick);
}

function cutNameCategory(name) {
  if (window.innerWidth <= 768) {
    if (name.length > 20) {
      return name.substring(0, 20) + '...';
    }
    return name;
  }
  return name;
}

function onBasketClick(event) {
  const target = event.target.closest('.shopinlist__btn');
  const li = target.closest('.shopinlist__card');

  if (!target) {
    return;
  }

  //   const bookEl = target
  //     .closest('.shopinlist__btn')
  //     .closest('.shopinlist__card');
  //   const seekedId = bookEl.dataset.id.trim();
  //   console.log(target.closest('.shopinlist__card'));
  //   console.log(id);
  let ITEM_PER_PAGE = window.innerWidth < 768 ? 4 : 3;

  let currentPageTest = 0;

  bookList = bookList.filter(item => item !== li.dataset.id);
  //   console.log(bookList.length, ITEM_PER_PAGE);
  if (pagination.getCurrentPage() === 2 && bookList.length === ITEM_PER_PAGE) {
    currentPageTest = 1;
  } else {
    currentPageTest = pagination.getCurrentPage();
  }

  //   bookList.splice(removedElIndexFromStorage, 1);
  localStoragemethod.save(LOCALSTORAGE_KEY, bookList);
  li.style.display = 'none';

  pagination.movePageTo(currentPageTest);

  if (bookList.length <= ITEM_PER_PAGE) {
    container.classList.add('disabled');
  }

  if (bookList.length === 0) {
    pasteEmptyNotificationContainer();
  }

  //   bookCount = bookList.length;
  //   pagination.setTotalItems(bookCount);
  //   pagination.movePageTo(page);

  //   if (bookListEl.childNodes.length === 0) {
  //     pagination.movePageTo(currentPage - 1);
  //   }
}

export default markupBooksInBasket;
