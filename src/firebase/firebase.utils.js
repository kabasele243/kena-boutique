import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyB7uKecgsF7UMPU6P6FFtDg1qeNX2suMIg",
  authDomain: "kena-boutique.firebaseapp.com",
  projectId: "kena-boutique",
  storageBucket: "kena-boutique.appspot.com",
  messagingSenderId: "727755247293",
  appId: "1:727755247293:web:9d33233eb0ec4108ef71d4",
  measurementId: "G-MJ0V0G9ZHZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
