// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0p7GFucgVfS-cBcclmw9bCw5q9Na6Q6g",
  authDomain: "petfinder-solvex-9040c.firebaseapp.com",
  projectId: "petfinder-solvex-9040c",
  storageBucket: "petfinder-solvex-9040c.appspot.com",
  messagingSenderId: "541799299276",
  appId: "1:541799299276:web:164ef70f1e2a2b71e16a69",
  measurementId: "G-G2BE58D7RS",
  
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
