import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
const config = {
  // apiKey: "Your API Key here",
  // authDomain: "blah",
  // projectId: "blah",
  // storageBucket: "blah",
  // messagingSenderId: "blah",
  // appId: "blah",

  apiKey: "AIzaSyAgVYuMqMCwRzp0mlNxVL7OoGDZ6Hkvtho",
    authDomain: "chat-2ee0a.firebaseapp.com",
    projectId: "chat-2ee0a",
    storageBucket: "chat-2ee0a.appspot.com",
    messagingSenderId: "328564381491",
    appId: "1:328564381491:web:abb0c590b31f68151b9046",
    measurementId: "G-5SLZGJTLKG"
};

firebase.initializeApp(config);

export const auth = firebase.auth;
export const db = firebase.database();
