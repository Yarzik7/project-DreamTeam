import { AxiosApi } from '../api/fetchBooks';
import { popupBookMarkupEl } from './popupMarkup';

const axiosApi = new AxiosApi();

const book = document.querySelector('.js-popup');

// book.addEventListener('click', onClick);

// function onClick(e) {
//   if (e.target.classList.contain('')) return;
// }

try {
  const res = axiosApi.getShops();
  console.log(res);

  return res;
} catch (error) {
  console.log(error);
}
