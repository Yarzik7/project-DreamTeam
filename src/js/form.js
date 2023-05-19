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
const bdForm = document.querySelector('.backdrop_form')
const closeBtn = document.querySelector('.js-modal-closeBtn')

form.addEventListener('submit', onSubmit);
signInEl.addEventListener('click', onSignIn);
signUpEl.addEventListener('click', onSignUp);
closeBtn.addEventListener('click', onClose)
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
  }
  else if (submitBtn.classList.contains('Js-signIn-btn')) {
    signInWithEmailAndPassword(auth, email, password)
      .then(resp => console.log(resp))
      .catch(err => console.log(err));
    return;
  }
 
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const user = userCredential.user;
      const userId = user.uid;
      writeUserData(userId, name, email);
    })
    .catch(error => {
      console.log(error.code);
      console.log(error.messag);
    });
    bdForm.classList.add('is-hidden')
};

function onClose() {
    bdForm.classList.add('is-hidden')
}
