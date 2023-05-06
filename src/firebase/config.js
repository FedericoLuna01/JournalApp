// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyDy_LgvJ-RRd4xouVJwIYmHRC3NNpiqL8o",
  authDomain: "journalapp-f7e98.firebaseapp.com",
  projectId: "journalapp-f7e98",
  storageBucket: "journalapp-f7e98.appspot.com",
  messagingSenderId: "356325361930",
  appId: "1:356325361930:web:6b194d45336922a79652f3",
  measurementId: "G-0X9B7SJWN9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);