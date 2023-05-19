import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { getDatabase, ref, set, child, get, push } from 'firebase/database';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA33UV7OBjkFv7cGwHXspz56WwnFTkUl1Y',
  authDomain: 'dream-team-project-bc025.firebaseapp.com',
  databaseURL:
    'https://dream-team-project-bc025-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'dream-team-project-bc025',
  storageBucket: 'dream-team-project-bc025.appspot.com',
  messagingSenderId: '343989525653',
  appId: '1:343989525653:web:4644793e39efe02e6a0f9c',
};

initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
// console.log(app);userId

// const database = getDatabase(app);
// console.log(database);

// const form = document.querySelector('.form');
// form.addEventListener('submit', onSubmit);


  // __________Створення нового Користувача_________

// function onSubmit(event) {
// //   event.preventDefault();
//   const name = event.currentTarget.elements.name.value;
//   const email = event.currentTarget.elements.email.value;
//   const password = event.currentTarget.elements.password.value;
    

//   if (password.value === '' || email.value === '') {
//     alert('Всі поля повинні бути заповненні!');
//   }
//   const auth = getAuth();
//   createUserWithEmailAndPassword(auth, email, password)
//     .then(userCredential => {
//       const user = userCredential.user;
//       const userId = user.uid;
//       console.log(user);
//         writeUserData(userId, name, email);
//     })
//     .catch(error => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
// //   form.reset();
//     });
// }



  // ________________Вхід старого ___________
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(resp => console.log(resp))

  // ?????????????????????????
    // const user = userCredential.user;
    //   userId = user.uid;

  //         .catch(err => console.log(err));




function writeUserData(userId, name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    name: name,
    email: email,
  });
}

// function writeUserBooks(books) {
//   const db = getDatabase();
//   push(ref(db, 'users/' + userId), {
//     selectedBooks: books,
//   });
// }


// вхід до системи_________________

//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then(resp => console.log(resp))
//         .catch(err => console.log(err));


// ______Наглядач (працює постійно)______________________
// const auth = getAuth();
// const dbRef = ref(getDatabase());

// onAuthStateChanged(auth, user => {
//     if (user) {
//       console.log(user);
//       get(child(dbRef, `users/${user.uid}`))
//       .then(userData => {
//           if (userData.exists()) {
//             console.log(userData);
//             const userProfile = userData.val();
//             console.log(userProfile);
//           const usserName = userProfile.name;
//           // ___отримує ім'я користувача__________
//           console.log(usserName);
//         } else {
//           console.log('No data available');
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });

    // ...
//   } else {
//     // User is signed out
//     // _________________користувач вийшов? - змінюємо кнопку_________
//   }
// });

// вихід із системи________________________________

const signOutBtn = document.querySelector('.js-signOutBtn');
signOutBtn.addEventListener('click', HendlerSignOut);

function HendlerSignOut() {
    //   const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
 console.log('you are signOut');
}).catch((error) => {
  console.log(error)
})
};


// const auth = getAuth();
// const user = auth.currentUser;
// console.log(user);
// if (user) {
//   // User is signed in, see docs for a list of available properties
//   // https://firebase.google.com/docs/reference/js/firebase.User
//   // ...
//     console.log(user);
// } else {
//   // No user is signed in.
//     console.log('usera net');
// }
export {HendlerSignOut, writeUserBooks, writeUserData}






// // запит на данні кристувача___________

// const dbRef = ref(getDatabase());
// get(child(dbRef, `users/${userId}`)).then((snapshot) => {
//   if (snapshot.exists()) {
//     console.log(snapshot.val());
//   } else {
//     console.log("No data available");
//   }
// }).catch((error) => {
//   console.error(error);
// });


// __________запис даних користувача_________

// function writeUserData(userId, name, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }

// {<form class="login-form">
//   <label>
//     Name
//     <input type="text" name="name" />
//   </label>
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// <button type="button" class="js-signOut-button">SignOut</button>
// <!-- < input
//   class="mdl-textfield__input"
//   style = "display: inline; width: auto"
//   type = "text"
//   id = "email"
//   name = "email"
//   placeholder = "Email"
//     />
// & nbsp;& nbsp;& nbsp;
// <input
//   class="mdl-textfield__input"
//   style="display: inline; width: auto"
//   type="password"
//   id="password"
//   name="password"
//   placeholder="Password"
// />
// <br /><br />
// <button
//   disabled
//   class="mdl-button mdl-js-button mdl-button--raised"
//   id="quickstart-sign-in"
//   name="signin"
// >
//   Sign In
// </button>
//     & nbsp;& nbsp;& nbsp;
//   <button
//     class="mdl-button mdl-js-button mdl-button--raised"
//     id="quickstart-sign-up"
//     name="signup"
//   >
//     Sign Up
//   </button>
//     & nbsp;& nbsp;& nbsp;
//   <button
//     class="mdl-button mdl-js-button mdl-button--raised"
//     disabled
//     id="quickstart-verify-email"
//     name="verify-email"
//   >
//     Send Email Verification
//   </button>
//     & nbsp;& nbsp;& nbsp;
//   <button
//     class="mdl-button mdl-js-button mdl-button--raised"
//     id="quickstart-password-reset"
//     name="verify-email"
//   >
//     Send Password Reset Email
//   </button>

// Container where we'll display the user details
//     < div class="quickstart-user-details-container" >
//       Firebase sign -in status:
//   <span id="quickstart-sign-in-status">Unknown</span>
//   <div>Firebase auth <code>currentUser</code> object value:</div>
//   <pre><code id="quickstart-account-details">null</code></pre>
// </div > -->

//     <section class="support">
//       <div class="support__container">
//         <div class="support__header-container">
//           <h2 class="support__header-title">Support Ukraine</h2>
//           <!-- <img
//             src="./images/Emblem_of_Ukraine.png"
//             alt="Emblem of Ukraine"
//             class="support__icon"
//           /> -->
//           <svg class="support__icon" width="20" height="32">
//             <use href="/src/images/sprite.svg#icon-gerb"></use>
//           </svg>
//         </div>
//         <div class="swiper mySwiper">
//           <div class="swiper-wrapper js-support_list"></div>
//         </div>
//         <button type="button" class="support__btn swiper-up">
//           <svg class="support__btn-icon" aria-label="Scroll down">
//             <use href="./images/sprite.svg#icon-slider"></use>
//           </svg>
//         </button>
//       </div>
//     </section>
// }
