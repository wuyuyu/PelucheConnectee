// File : src/index.js [EXTRAIT]

//...
import * as firebase from "firebase";
//...
// On retrouve notre variable config ;)
// Remplacez par la votre si vous voulez
 const config = {
    apiKey: "AIzaSyDBkqvQrhTQtzLBd8R_deQ45gveZW7tPDw",
    authDomain: "peluche-e5396.firebaseapp.com",
    databaseURL: "https://peluche-e5396.firebaseio.com",
    projectId: "peluche-e5396",
    storageBucket: "peluche-e5396.appspot.com",
    messagingSenderId: "932805687109",
    appId: "1:932805687109:web:139bcc2bf79e8e69e2302c",
    measurementId: "G-HVKF022S87"
  };

firebase.initializeApp(config);
// const usersRef = con.database().ref();
//...

