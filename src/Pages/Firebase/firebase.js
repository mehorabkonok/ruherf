// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALgrGp93B4tszEkCnZajktIsZmn5JZ87c",
  authDomain: "ruherf-ru.firebaseapp.com",
  projectId: "ruherf-ru",
  storageBucket: "ruherf-ru.firebasestorage.app",
  messagingSenderId: "161578701849",
  appId: "1:161578701849:web:80ee4a3ba2a68449b18688",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
