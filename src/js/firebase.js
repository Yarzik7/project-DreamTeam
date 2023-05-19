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

const signUpBtnheder = document.querySelector('.Js-signUpBtn-heder');
const signOutBtn = document.querySelector('.js-logOutBtn-header');
const profileBtn = document.querySelector('.Js-profileBtn');
const logOutBtnHeader = document.querySelector('.js-logOutBtn-header');
const profileName = document.querySelector('.js-profile-name');

profileBtn.addEventListener('click', hendlerProfileBtn);
signOutBtn.addEventListener('click', HendlerSignOut);
signUpBtnheder.addEventListener('click', hendlersignUpBtnheder);



// ______Наглядач (працює постійно)______________________
const auth = getAuth();
const dbRef = ref(getDatabase());

onAuthStateChanged(auth, user => {
  if (user) {
      get(child(dbRef, `users/${user.uid}`))
      .then(userData => {
        if (userData.exists()) {         
          const userProfile = userData.val();
               const usserName = userProfile.name;
          profileName.textContent = usserName;
          profileBtn.classList.remove('is-hidden');
          signUpBtnheder.classList.add('is-hidden');     
      
        } else {
          console.log('No data available');
        }
      })
      .catch(error => {
        console.log(error);
      });
  } 
});

// ________________Для хедеру_____________

// вихід із системи________________________________

function HendlerSignOut() {
  const auth = getAuth();
  profileBtn.classList.add('is-hidden');
    signUpBtnheder.classList.remove('is-hidden');
    signOutBtn.classList.add('is-hidden');
  signOut(auth)
    .then(() => {
      console.log('you are signOut');
    })
    .catch(error => {
      console.log(error);
    });
}

// __________________heder SignUp button___________

function hendlersignUpBtnheder() {
  const bdForm = document.querySelector('.backdrop_form');
  bdForm.classList.remove('is-hidden');
  logOutBtnHeader.classList.remove('is-hidden');
}

// _________________heder Profile - button

function hendlerProfileBtn() {
    // if(logOutBtnHeader.classList.contains(''))
    logOutBtnHeader.classList.toggle('is-hidden');
//   logOutBtnHeader.classList.remove('is-hidden');
}


export { HendlerSignOut, writeUserBooks, writeUserData };

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




