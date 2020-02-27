import {config} from './firebaseconfig.js'
import app from "firebase/app";

/*const config = {
    apiKey: "AIzaSyDBkqvQrhTQtzLBd8R_deQ45gveZW7tPDw",
    authDomain: "peluche-e5396.firebaseapp.com",
    databaseURL: "https://peluche-e5396.firebaseio.com",
    projectId: "peluche-e5396",
    storageBucket: "peluche-e5396.appspot.com",
    messagingSenderId: "932805687109",
    appId: "1:932805687109:web:139bcc2bf79e8e69e2302c",
    measurementId: "G-HVKF022S87"
  };
*/
export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    console.log("Firebase ok");
  }


  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  doSignOut = () => this.auth.signOut();
  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
