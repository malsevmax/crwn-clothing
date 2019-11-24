import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAu06wAuUJY-dY_05IFPDNSZ-ppnWFGxJ4",
  authDomain: "crwn-db-3c2fa.firebaseapp.com",
  databaseURL: "https://crwn-db-3c2fa.firebaseio.com",
  projectId: "crwn-db-3c2fa",
  storageBucket: "crwn-db-3c2fa.appspot.com",
  messagingSenderId: "969576045572",
  appId: "1:969576045572:web:2d25dcb0abb476af77a951",
  measurementId: "G-5EH25XL55R"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;