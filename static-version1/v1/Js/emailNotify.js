// Verify the user's email after registering
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
// no need for analytics

// BACKEND - AUTH - and - EMAIL STORAGE
const firebaseConfig = {
  apiKey: "AIzaSyDepxmjXTw9JTHwo7gNMJ63tVJjgNsMI90",
  authDomain: "liquidmoni-project.firebaseapp.com",
  databaseURL: "https://liquidmoni-project-default-rtdb.firebaseio.com",
  projectId: "liquidmoni-project",
  storageBucket: "liquidmoni-project.appspot.com",
  messagingSenderId: "626382019482",
  appId: "1:626382019482:web:ddaf20cdb7f12b787cb823",
  measurementId: "G-PLK7C36XE1",
};

// Initialize Backend and Auth for process
// const firebaseApp = initializeApp(firebaseConfig);

// const realTimeDatabase = getDatabase();

// Store the email in the database for security - use realstore and firestore database for the storage of the notified user's email
let storeUserEmail = (userEmail) => {
  realTimeDatabase.push(userEmail);

  realTimeDatabase.set({
    userEmailAddress: userEmail,
  });
};

// FRONTEND - Email Validation and submission
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/g;
// const emailPattern = /g/
const emailForm = document.querySelector(".form");
const emailSubmitButton = document.querySelector(".form__fieldset__button");

emailSubmitButton.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailAddress = document.querySelector(
    ".form__fieldset__email-input"
  ).value;
  if (emailForm.matches(emailPattern)) {
    alert("GET NOTIFIED");
    storeUserEmail(emailAddress);
    // in here, perform all the functions for the user to receive the mail saying they'll be notified when the app is released
  } else if (emailForm.value === "" || emailForm.value === " ") {
    // Add a class for showing that the email is invalid
    alert("INVALID");
  }
});
