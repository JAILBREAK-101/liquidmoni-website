const contactForm = document.getElementById("contact__form");
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

// Object is coming from the cdn
firebase.initializeApp(firebaseConfig);

// make reference to firebase database
const contactFormDB = firebase.database().ref("contact-form");

let getInputVal = (id) => {
  return document.getElementById(id).value;
};

let storeMessages = (name, email, message) => {
  let contactFormData = contactFormDB.push();

  contactFormData.set({
    userName: name,
    userEmail: email,
    userMessage: message,
  });
};
let submitForm = (e) => {
  e.preventDefault();
  //   store into the database
  let nameValue = getInputVal("username");
  let emailValue = getInputVal("email");
  let messageContent = getInputVal("message");

  storeMessages(nameValue, emailValue, messageContent);

  setTimeout(() => {
    document.querySelector(".alert").style.display = "block";
  }, 1500);
};

contactForm.addEventListener("submit", submitForm);
