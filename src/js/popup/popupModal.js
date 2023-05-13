import { AxiosApi } from '../api/fetchBooks';

const axiosApi = new AxiosApi();

let modalCard = document.querySelector('.js-popup');

const chosenBook = document.querySelector('.js-all-books');

chosenBook.addEventListener('click', onClick);

async function onClick(e) {
  const idBook = e.target.parentElement.dataset.id;

  console.log(idBook);

  try {
    const responce = await axiosApi.getShops(idBook);
    const arr = responce.data;
    console.log(arr);
    const mark = createPopupCard(arr);

    modalCard.insertAdjacentHTML('beforeend', mark.join(''));
  } catch (error) {
    console.log(error);
  }
}

function createPopupCard(arr) {
  arr.map(
    ({ author, book_image, title, buy_links: [{ name, url }], list_name }) =>
      `
    <button  class="js-popup-close" type="button">
        <svg width="20" height="20"></svg>
        <use href=""></use>
        </svg>
    </button>
    <div>
        <a href="">
            <img src="${book_image}" alt="${title}">
        </a>
        <h2>${title}</h2>
        <h3>${author}</h3>
        <p>${list_name}</p>
        <ul>
            <li>
                <a href="${url}">
                    <img src="" alt="${name}">
                </a>
            </li>
        </ul>
    </div>
    <div>
        <button type="button">

        </button>
        <p class=""></p>
    </div>`
  );
}
