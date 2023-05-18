import { initializeApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from 'firebase/firestore';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { getPerformance } from 'firebase/performance';
import { getDatabase, ref, set, child, get } from 'firebase/database';

function writeUserData(name, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
    username: name,
    email: email,
  });
}

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

const app = initializeApp(firebaseConfig);
console.log(app);

const database = getDatabase(app);
console.log(database);

const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;
  if (password.value === '' || email.value === '') {
    alert('Всі поля повинні бути заповненні!');
  }

  const dataForm = {
    email: email.value,
    password: password.value,
  };

  console.log(email.value);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
          const user = userCredential.user;
          console.log(user);
          writeUserData(user.uid, email.value)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

//   form.reset();

//   signInWithEmailAndPassword(auth, email.value, password.value)
//     .then(resp => console.log(resp))
//         .catch(err => console.log(err));
    
    
    
}

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




function writeUserData(userId, email) {
  const db = getDatabase();
  set(ref(db, 'users/' + userId), {
        email: email,
  });
}


// function writeUserData(userId, name, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }

// віхід із системи________________________________

import { getAuth, signOut } from 'firebase/auth';

// const auth = getAuth();
// signOut(auth).then(() => {
//   // Sign-out successful.
// }).catch((error) => {
//   // An error happened.
// });

// Наглядач______________________
const auth = getAuth();
onAuthStateChanged(auth, user => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    console.log(user);
    // ...
  } else {
    // User is signed out
    // ...
  }
});

// function writeUserData(userId, name, email) {
//   const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//   });
// }

// const auth = getAuth();
// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// function toggleSignIn() {
//   if (firebase.auth().currentUser) {
//     firebase.auth().signOut();
//   } else {
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     if (email.length < 4) {
//       alert('Please enter an email address.');
//       return;
//     }
//     if (password.length < 4) {
//       alert('Please enter a password.');
//       return;
//     }
//     // Sign in with email and pass.
//     firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       if (errorCode === 'auth/wrong-password') {
//         alert('Wrong password.');
//       } else {
//         alert(errorMessage);
//       }
//       console.log(error);
//       document.getElementById('quickstart-sign-in').disabled = false;
//     });
//   }
//   document.getElementById('quickstart-sign-in').disabled = true;
// }

// /**
//  * Handles the sign up button press.
//  */
// function handleSignUp() {
//   var email = document.getElementById('email').value;
//   var password = document.getElementById('password').value;
//   if (email.length < 4) {
//     alert('Please enter an email address.');
//     return;
//   }
//   if (password.length < 4) {
//     alert('Please enter a password.');
//     return;
//   }
//   // Create user with email and pass.
//   firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode == 'auth/weak-password') {
//       alert('The password is too weak.');
//     } else {
//       alert(errorMessage);
//     }
//     console.log(error);
//   });
// }

// /**
//  * Sends an email verification to the user.
//  */
// function sendEmailVerification() {
//   firebase.auth().currentUser.sendEmailVerification().then(function() {
//     // Email Verification sent!
//     alert('Email Verification Sent!');
//   });
// }

// function sendPasswordReset() {
//   var email = document.getElementById('email').value;
//   firebase.auth().sendPasswordResetEmail(email).then(function() {
//     // Password Reset Email Sent!
//     alert('Password Reset Email Sent!');
//   }).catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     if (errorCode == 'auth/invalid-email') {
//       alert(errorMessage);
//     } else if (errorCode == 'auth/user-not-found') {
//       alert(errorMessage);
//     }
//     console.log(error);
//   });
// }

// /**
//  * initApp handles setting up UI event listeners and registering Firebase auth listeners:
//  *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
//  *    out, and that is where we update the UI.
//  */
// function initApp() {
//   // Listening for auth state changes.
//   firebase.auth().onAuthStateChanged(function(user) {
//     document.getElementById('quickstart-verify-email').disabled = true;
//     if (user) {
//       // User is signed in.
//       var displayName = user.displayName;
//       var email = user.email;
//       var emailVerified = user.emailVerified;
//       var photoURL = user.photoURL;
//       var isAnonymous = user.isAnonymous;
//       var uid = user.uid;
//       var providerData = user.providerData;
//       document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
//       document.getElementById('quickstart-sign-in').textContent = 'Sign out';
//       document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
//       if (!emailVerified) {
//         document.getElementById('quickstart-verify-email').disabled = false;
//       }
//     } else {
//       // User is signed out.
//       document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
//       document.getElementById('quickstart-sign-in').textContent = 'Sign in';
//       document.getElementById('quickstart-account-details').textContent = 'null';
//     }
//     document.getElementById('quickstart-sign-in').disabled = false;
//   });

//   document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
//   document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
//   document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
//   document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);
// }

// window.onload = function() {
//   initApp();
// };
