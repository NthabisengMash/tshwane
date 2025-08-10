// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAUb6BtxHydMqyIXB2cpVDi0RY-fgJ9tzk",
    authDomain: "tshwane-bus-app.firebaseapp.com",
    projectId: "tshwane-bus-app",
    storageBucket: "tshwane-bus-app.firebasestorage.app",
    messagingSenderId: "593771052389",
    appId: "1:593771052389:web:8f6b718b8a8e71af53b58c",
    measurementId: "G-X26Q8ZQLJC"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);   // <--- Make sure this line exists