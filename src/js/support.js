import { founds } from "../data/support-data";


const supportListEl = document.querySelector('.js-support_list');
// const supportBtnEl = document.querySelector('.js-support_btn');



const markUp = founds.map(({ img, title, url }, index) => {
    const number = (index + 1).toString().padStart(2, '0');


  // <div class="swiper-slide">Slide 1</div>
  return `<li class="support__item swiper-slide"><a href="${url}" class="support__link" aria-label="${title}" target="_blank" rel="noopener norefferer nofollow">
    <p class="support__number">${number}</p><img class="support__img" src= ${img} alt="${title}"/></a></li>`;
});


// let startIndex = 0;

// renderMarkup(markup, startIndex, findEndIndex(startIndex));

function renderMarkup(arr) {

  supportListEl.insertAdjacentHTML('beforeend', arr);
  // if (markup.length <= itemsCountEnd) {
  //   supportBtnEl.style.display = 'none';
  //   return;
  // }
}
renderMarkup(markUp);




// function renderMarkup(arr, itemsCountStart, itemsCountEnd) {
//   const markupToRender = arr.slice(itemsCountStart, itemsCountEnd).join('');
//   startIndex = findEndIndex(startIndex);

//   supportListEl.insertAdjacentHTML('beforeend', markupToRender);

//   if (markup.length <= itemsCountEnd) {
//     supportBtnEl.style.display = 'none';
//     return;
//   }
// }




// function findEndIndex(value) {
//   if (window.innerWidth < 768) {
//     return value + 4;
//   } else {
//     return value + 6;
//   }
// }





// ____________________swiper________________________________________________________________

  // import Swiper, { Navigation, Pagination } from 'swiper';
  // import '../../node_modules/swiper/modules/navigation/navigation.scss';


  // import '../../node_modules/swiper/modules/pagination/pagination.scss';

  // import '../../node_modules/swiper/swiper.css';
  // import Swiper from 'swiper/bundle';

  // // import styles bundle
  // import 'swiper/css/bundle';
// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,
//   breakpointsBase: 'container',
//   slidesPerView: 4,
//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });
// const swiperEl = document.querySelector('.swiper').swiper;

  // import 'swiper/css';
  // import 'swiper/css/navigation';

//  new Swiper(".Swiper", {
//   width: 400,
//   height: 400,
//    direction: "vertical",
//    loop: true,
//       navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//   },
//         scrollbar: {
//     el: '.swiper-scrollbar',
//   },
//     });
// console.log(swiper);
// const supportNav = document.querySelector('.swiper').swiper;
// const nextBtn = document.querySelector('swiper-button-next');
// nextBtn.addEventListener('click', handleNextBtn);
// function handleNextBtn() {
//   supportNav.slideNext()
// }
