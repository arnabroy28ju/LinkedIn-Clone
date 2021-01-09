import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCEkEq-Zfk-prcyUnrmb11BZiwuqRnnQ9o",
    authDomain: "linkedin-clone-89236.firebaseapp.com",
    projectId: "linkedin-clone-89236",
    storageBucket: "linkedin-clone-89236.appspot.com",
    messagingSenderId: "688735132616",
    appId: "1:688735132616:web:4020337bd1862a7715befd"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
