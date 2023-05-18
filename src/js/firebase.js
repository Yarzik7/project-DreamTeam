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

import { getDatabase, ref, set, child, get } from 'firebase/database';


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
// console.log(app);

// const database = getDatabase(app);
// console.log(database);

const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const name = event.currentTarget.elements.name.value;
  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  if (password.value === '' || email.value === '') {
    alert('Всі поля повинні бути заповненні!');
  }
  // __________Створення нового Користувача_________
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      writeUserData(user.uid, name, email);
  
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;

    });

  // ________________Вхід старого ___________
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then(resp => console.log(resp))
  //         .catch(err => console.log(err));
  //   form.reset();
}


function writeUserData(userId, name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    name: name,
    email: email,
  });
}




// вхід до системи_________________

//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then(resp => console.log(resp))
//         .catch(err => console.log(err));



// ______Наглядач (працює постійно)______________________
const auth = getAuth();
const dbRef = ref(getDatabase());

onAuthStateChanged(auth, user => {
  if (user) {
    console.log(user);
    get(child(dbRef, `users/${user.uid}`))
      .then(userData => {
        if (userData.exists()) {
          const userProfile = userData.val();
          const usserName = userProfile.name;

          // ___отримує ім'я користувача__________
          console.log(usserName);
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.error(error);
      });

    // ...
  } else {
    // User is signed out
    // _________________користувач вийшов? - змінюємо кнопку_________
  }
});

// вихід із системи________________________________

const signOutBtn = document.querySelector('.js-signOut-button');
signOutBtn.addEventListener('click', HendlerSignOut);

 function HendlerSignOut() {
signOut(auth).then(() => {
  // Sign-out successful.
 console.log('you are signOut');
}).catch((error) => {
  console.log(error)
})
};




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

