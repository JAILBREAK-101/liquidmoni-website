<<<<<<< HEAD
// import { getDatabase, ref, set } from "firebase/database";
// import { signUpFormSubmitButton } from "../Js/forms";
// const App1 = initializeApp(firebaseConfig);
// const dbForNewUsers = getDatabase();
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
const requiredPwLength = 6;
const signUpForm = document.querySelector(".sign__up-form");
const signUpEmail = signUpForm["sign__up-email"].value;
const signUpPassword = signUpForm["sign__up-password"].value;
=======


import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./login-user";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const auth = getAuth();
const firebaseConfig = {
  apiKey: "AIzaSyBNVTxjCatZxSiZhc5HY8Gr64lBMlb9fiA",
  authDomain: "liquidmoni-project-3d474.firebaseapp.com",
  projectId: "liquidmoni-project-3d474",
  storageBucket: "liquidmoni-project-3d474.appspot.com",
  messagingSenderId: "305360626126",
  appId: "1:305360626126:web:7f8889f18c 97247a960b9f",
  measurementId: "G-0QLYZCMM04",
};
>>>>>>> tweaks

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // frontend - validation

  console.log(signUpEmail, signUpPassword);
  // backend - authentication
  auth
    .createUserWithEmailAndPassword(signUpEmail, signUpPassword)
    .then((signedInUser) => {
      console.log(signedInUser);
    })
    .catch((error) => {
      // error
    });
<<<<<<< HEAD
  checkEmailInput(signUpEmail, signUpPassword);
  handleSignUp(signUpEmail, signUpPassword);
=======
>>>>>>> tweaks
});

// OLD BACKEND KEY
const firebaseConfig = {
  apiKey: "AIzaSyCEyEZjXsiAo60dcNRvwWZgUK9v567Wq4A",
  authDomain: "liquidmoni-backend.firebaseapp.com",
  databaseURL: "https://liquidmoni-backend-default-rtdb.firebaseio.com",
  projectId: "liquidmoni-backend",
  storageBucket: "liquidmoni-backend.appspot.com",
  messagingSenderId: "167765509992",
  appId: "1:167765509992:web:4547c0a49a0ce92b2478dd",
  measurementId: "G-RYZRVYEXWZ",
};

// unwanted backend code
// loginButton.addEventListener("click", openModal(login));

// sending of message to the database
// const supportForm = document.getElementById("support__form");

// const firebaseConfig = {
//   apiKey: "AIzaSyCEyEZjXsiAo60dcNRvwWZgUK9v567Wq4A",
//   authDomain: "liquidmoni-backend.firebaseapp.com",
//   databaseURL: "https://liquidmoni-backend-default-rtdb.firebaseio.com",
//   projectId: "liquidmoni-backend",
//   storageBucket: "liquidmoni-backend.appspot.com",
//   messagingSenderId: "167765509992",
//   appId: "1:167765509992:web:4547c0a49a0ce92b2478dd",
//   measurementId: "G-RYZRVYEXWZ",
// };

// // Object is coming from the cdn
// firebase.initializeApp(firebaseConfig);

// // make reference to firebase database
// const contactFormDB = firebase.database().ref("support-form");

// contactForm.addEventListener("submit", submitForm);

// let getInputVal = (id) => {
//   return document.getElementById(id).value;
// };

// let storeMessages = (name, email, message) => {
//   let contactFormData = contactFormDB.push();

//   contactFormData.set({
//     userName: name,
//     userEmail: email,
//     userMessage: message,
//   });
// };

// let submitForm = (e) => {
//   e.preventDefault();
//   //   store into the database
//   let nameValue = getInputVal("username");
//   let emailValue = getInputVal("email");
//   let messageContent = getInputVal("message");

//   storeMessages(nameValue, emailValue, messageContent);

//   setTimeout(() => {
//     document.querySelector(".alert").style.display = block;
//   }, 1500);
// };

// support and log in modal.
// const login = document.querySelector(".log-in-modal");
// const loginButton = document.querySelector(".log-in__submit-button");
// const loginCloseButton = document.querySelector(".log-in__close");
