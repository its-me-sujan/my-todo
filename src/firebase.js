import exp from "constants";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4mklpwUnfxA8WJKvSPJOpZnz3CuVqRTs",
  authDomain: "todoapp-ef5e9.firebaseapp.com",
  projectId: "todoapp-ef5e9",
  storageBucket: "todoapp-ef5e9.appspot.com",
  messagingSenderId: "631320788347",
  appId: "1:631320788347:web:f73e6c28ccb041f58891de",
  measurementId: "G-F0SYV7QWKN",
};

function initialize() {
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  return { app, db };
}

const firebase = initialize();

export default firebase;
