
const homeLink = document.querySelector('.js-link-home');
const shoppingListLink = document.querySelector('.js-link-shoppingList');
const homeLinkMobile = document.querySelector('.js-link-home-mobile');
const shoppingListLinkMobile = document.querySelector('.js-link-shoppingList-mobile');

function changeCurrentPageOnHomePage() {
  homeLink.classList.add('current-page');
  shoppingListLink.classList.remove('current-page');
  homeLinkMobile.classList.add('current-page');
  shoppingListLinkMobile.classList.remove('current-page');
}

function changeCurrentPageOnShoppingList() {
  homeLink.classList.remove('current-page');
  shoppingListLink.classList.add('current-page');
  homeLinkMobile.classList.remove('current-page');
  shoppingListLinkMobile.classList.add('current-page');
}

export { changeCurrentPageOnHomePage, changeCurrentPageOnShoppingList };
