// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword ,onAuthStateChanged ,signOut  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAqEJXHqUwNg5D6ewqmDc4zU3WYhOHkVw",
  authDomain: "test-project-b7a04.firebaseapp.com",
  projectId: "test-project-b7a04",
  storageBucket: "test-project-b7a04.firebasestorage.app",
  messagingSenderId: "927017385752",
  appId: "1:927017385752:web:fda2d1991535eccb0e286d",
  measurementId: "G-29Y24W9ZY0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword ,onAuthStateChanged,signOut };