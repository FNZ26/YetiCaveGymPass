// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from  "firebase/auth";
// se agrega esto: (se  importa)

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhwHjW6g1dOrQDi9GtX0e-C21KeuBAdBg",
  authDomain: "yeticavegym.firebaseapp.com",
  databaseURL: "https://yeticavegym-default-rtdb.firebaseio.com",
  projectId: "yeticavegym",
  storageBucket: "yeticavegym.appspot.com",
  messagingSenderId: "337693838300",
  appId: "1:337693838300:web:dd24a432d3ec5d05b61d19"
};

// Initialize Firebase
// antes: const app = initializeApp(firebaseConfig);


//se agrega esto:
export const app = initializeApp(firebaseConfig);

export const firebase_auth = getAuth(app)


//How To:
// Firebase,  ecApi y Redux

// segundo crear  carpeta services para  las api (en este caso, la api es para la base de datos)


//HowTo:
// Primero se  instala redux y se  arma el Store y Slices
// Segundo Se instala Firebase (database.js y firebase_auth)
// crear  carpeta services para  las api (en este caso, la api es para la base de datos)