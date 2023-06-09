import { bookShopsIcons } from '../../data/shopsImages';

const stores = ['Amazon', 'Apple Books', 'Bookshop'];

//Creates HTML render of shop links for modal window
function createShopLinks(buyLinks) {
  const filteredShops = stores.map(storeName =>
    buyLinks.find(({ name }) => name === storeName)
  );

  const markupShops = filteredShops
    .map(
      ({ name, url }, idx) => `
      <li class="stores-list__item">
        <a href="${url}" target="_blank" rel="noopener noreferrer nofollow">
          <img
            srcset="${bookShopsIcons[idx].x1} 1x, ${bookShopsIcons[idx].x2} 2x"
            src="${bookShopsIcons[idx].x1}"
            alt="${name}" 
            width="${bookShopsIcons[idx].width}" 
            height="${bookShopsIcons[idx].height}"
            class="stores-img${!idx ? '__amazon' : ''}">
        </a>
      </li>`
    )
    .join('');

  return markupShops;
}

function createPopupCard(
  { author, book_image, title, buy_links, description },
  check
) {
  return `
      <div class="pop-up scrollable">
        <div class="pop-up__book-info">
          <img class="pop-up__img" src="${book_image}" alt="${title}">
          <div class="pop-up__description">
            <h2 class="pop-up__book-name">${title}</h2>
            <h2 class="pop-up__book-author">${author}</h2>
            <p class="pop-up__review">${
              !description ? 'Description' : description
            }</p>
            <ul class="stores-list">${createShopLinks(buy_links)}</ul>
          </div>
        </div>
        <div class="pop-up__btn">
        <button class="action-button pop-up__action-button js-add-storage">${check}</button>
        <p class="pop-up__congratulations">Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
        </div>
        <button class="js-popup-close close-button" type="button">
          <img src="${new URL(
            `../../images/icon-x-close.svg`,
            import.meta.url
          )}" width="24" height="24">
        </button>
      </div>`;
}

export { createPopupCard };
