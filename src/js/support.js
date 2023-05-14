import { founds } from '../data/support-data';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';

const supportListEl = document.querySelector('.js-support_list');
const upBtn = document.querySelector('.swiper-up');
const downBtn = document.querySelector('.swiper-down');

downBtn.addEventListener('click', onPrew);
upBtn.addEventListener('click', onNext);

const markUp = founds
  .map(({ img, title, url }, index) => {
    const number = (index + 1).toString().padStart(2, '0');

    return `<div class="support__item swiper-slide">
  <a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
  <p class="support__number">${number}</p>
  <img class="support__img" src= ${img} alt="${title}"/>
  </a></div>`;
  })
  .join('');

function renderMarkup(arr) {
  supportListEl.insertAdjacentHTML('beforeend', arr);
}

renderMarkup(markUp);
renderMarkup(markUp);

const swiper = new Swiper('.mySwiper', {
  direction: 'vertical',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
});

function onNext() {
  swiper.slideNext(250);
}

function onPrew() {
  swiper.slidePrev(250);
}
