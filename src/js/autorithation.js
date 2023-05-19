import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { writeUserData } from './firebase';

const form = document.querySelector('.form');
const signInEl = document.querySelector('.js-signIn');
const submitBtn = document.querySelector('.btn_form');
const signUpEl = document.querySelector('.js-signUp');
const bdForm = document.querySelector('.backdrop_form');
const closeBtn = document.querySelector('.js-modal-closeBtn');
const profileBtn = document.querySelector('.Js-profileBtn');
const signUpBtnheder = document.querySelector('.Js-signUpBtn-heder');
const profileName = document.querySelector('.js-profile-name');
const signOutBtn = document.querySelector('.js-logOutBtn-header');


form.addEventListener('submit', onSubmit);
signInEl.addEventListener('click', onSignIn);
signUpEl.addEventListener('click', onSignUp);
closeBtn.addEventListener('click', onClose);
let userName = '';

function onSignUp(e) {
  e.preventDefault();

  submitBtn.classList.remove('Js-signIn-btn');
  submitBtn.textContent = 'SIGN UP';
  signUpEl.classList.add('curent');
  signInEl.classList.remove('curent');
}

function onSignIn(e) {
  e.preventDefault();
  submitBtn.classList.add('Js-signIn-btn');
  submitBtn.textContent = 'SIGN IN';
  signUpEl.classList.remove('curent');
  signInEl.classList.add('curent');
}

function onSubmit(event) {
  event.preventDefault();
  const name = event.currentTarget.elements.name.value;
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const auth = getAuth();
  userName = name;

  if (password.value === '' || email.value === '') {
    alert('Всі поля повинні бути заповненні!');
  } else if (submitBtn.classList.contains('Js-signIn-btn')) {
    signInWithEmailAndPassword(auth, email, password)
      .then(resp => console.log(resp))
      .catch(err => console.log(err))
      .finally(() => {
        form.reset();
      });
    profileBtn.classList.remove('is-hidden');
    profileName.textContent = name;
    signUpBtnheder.classList.add('is-hidden');
    signOutBtn.classList.add('is-hidden');
    bdForm.classList.add('is-hidden');
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const userId = user.uid;
      writeUserData(userId, name, email);
      profileBtn.classList.remove('is-hidden');
      profileName.textContent = name;
      signUpBtnheder.classList.add('is-hidden');
      signOutBtn.classList.add('is-hidden');
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.messag);
    })
    .finally(() => {
      form.reset();
    });
  bdForm.classList.add('is-hidden');
}

function onClose() {
  bdForm.classList.add('is-hidden');
  if (!signOutBtn.classList.contains('is-hidden')) {
    signOutBtn.classList.add('is-hidden')
  }
}
