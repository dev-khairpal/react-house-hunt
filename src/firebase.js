// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiV6bjEgjQ3FUPkn2Df5mRWWunRkL_bjk",
  authDomain: "mern-estate-112b4.firebaseapp.com",
  projectId: "mern-estate-112b4",
  storageBucket: "mern-estate-112b4.appspot.com",
  messagingSenderId: "698323816768",
  appId: "1:698323816768:web:69dd4e6e58fa09f0672aa5",
  measurementId: "G-YTF70T1Z7H",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();

