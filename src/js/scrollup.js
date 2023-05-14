const btnScrl = document.querySelector('.btn-scroll');
if (btnScrl) {
  btnScrl.classList.add('is-hidden-up');
}

function handleScroll() {
  if (window.scrollY > 200) {
    btnScrl.classList.remove('is-hidden-up');
  } else if (window.scrollY == 0) {
    btnScrl.classList.add('is-hidden-up');
  }
}

function handleScrollUp(e) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

if (btnScrl) {
  btnScrl.addEventListener('click', handleScrollUp);
}

window.addEventListener('scroll', handleScroll);
function scrollToTitle() {
  listTopBooks.previousElementSibling.scrollIntoView({ behavior: 'smooth' });
}
