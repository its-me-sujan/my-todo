import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwkwMRq1KDboG5qkgKQcmOOi3C7uKudo8",
  authDomain: "my-todo-64a13.firebaseapp.com",
  projectId: "my-todo-64a13",
  storageBucket: "my-todo-64a13.appspot.com",
  messagingSenderId: "499365882565",
  appId: "1:499365882565:web:a7052cf2ac75f71b89deac",
  measurementId: "G-QG9QPMWTES"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;


