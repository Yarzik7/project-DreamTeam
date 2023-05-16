import { SupportFounds } from '../data/support-data';
import Swiper from 'swiper';
import '../../node_modules/swiper/swiper.scss';
import { imegesSupport } from '../images/support-images/sapport-img';

const supportListEl = document.querySelector('.js-support_list');
const upBtn = document.querySelector('.swiper-up');

upBtn.addEventListener('click', onNext);


function findImage(name, arrImgFounds) {
return arrImgFounds.find(found => found.title === name);
};

function renderMarkup(arr) {
  supportListEl.insertAdjacentHTML('beforeend', arr);
};

const markUp = SupportFounds
  .map(({ title, url }, index) => {
    const number = (index + 1).toString().padStart(2, '0');
    const imgfinded = findImage(title, imegesSupport);
    const img = imgfinded.img;
    const imgRetina = imgfinded.img2x;

    return `<div class="support__item swiper-slide">
  <a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
  <p class="support__number">${number}</p>
  <img class="support__img" srcset="${img} 1x, ${imgRetina} 2x" src= ${img} alt="${title}"/>
  </a></div>`;
  })
  .join('');

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

