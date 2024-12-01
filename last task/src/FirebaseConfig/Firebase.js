// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzAzU_qlI7SKDJosr6I0_zuG589EHtFhc",
  authDomain: "smit-last-assigment.firebaseapp.com",
  projectId: "smit-last-assigment",
  storageBucket: "smit-last-assigment.firebasestorage.app",
  messagingSenderId: "852720839118",
  appId: "1:852720839118:web:45587a19f8e187c300e39f",
  measurementId: "G-2Z4QQ7GMEG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,signOut }