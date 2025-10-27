import app from 'firebase/app';
import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDaW6WokvejqdtjCHXTMR7vXs2lRY-onqs",
  authDomain: "proyectofirebase-a7613.firebaseapp.com",
  projectId: "proyectofirebase-a7613",
  storageBucket: "proyectofirebase-a7613.appspot.com",
  messagingSenderId: "823334313511",
  appId: "1:823334313511:web:d9aeea97919a2a92277802"
};

app.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const storage = app.storage();
export const db = app.firestore();