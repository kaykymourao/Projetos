// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8CPryujxSBVM7pPHjb5az5i9MjxqHsBU",
  authDomain: "twitter-clone-22ac5.firebaseapp.com",
  projectId: "twitter-clone-22ac5",
  storageBucket: "twitter-clone-22ac5.appspot.com",
  messagingSenderId: "78032286522",
  appId: "1:78032286522:web:943ee5d0af170ccf3d9603",
  measurementId: "G-Z37P5VX984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, db }