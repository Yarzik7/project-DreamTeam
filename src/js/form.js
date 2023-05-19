const refs = {
  singUp: document.querySelector('.js-signUp'),
  singIn: document.querySelector('.js-signIn'),
};

// Button click singIn
refs.singIn.addEventListener('click', () => {
  refs.singIn.style.color = 'var(--sign-up-text-color)';
  refs.singIn.style.textDecoration = 'underline';
  refs.singUp.style.color = 'var(--sign-in-text-color)';
  refs.singUp.style.textDecoration = 'none';
});

// Button click singUp
refs.singUp.addEventListener('click', () => {
  refs.singUp.style.color = 'var(--sign-up-text-color)';
  refs.singUp.style.textDecoration = 'underline';
  refs.singIn.style.color = 'var(--sign-in-text-color)';
  refs.singIn.style.textDecoration = 'none';
});
