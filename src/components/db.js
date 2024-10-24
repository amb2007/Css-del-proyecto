
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCqJXIVos2lFL_sC4rYGIQ-l0Kp-67YkrA",
  authDomain: "usuarios-tinder-movies.firebaseapp.com",
  projectId: "usuarios-tinder-movies",
  storageBucket: "usuarios-tinder-movies.appspot.com",
  messagingSenderId: "923345200348",
  appId: "1:923345200348:web:3b103677acbc5a89a34019",
  measurementId: "G-8Z5M04ZMBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}