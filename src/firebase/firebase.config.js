// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH-C4QqkeEY3eOBMQx_faDw1n3usyVkNM",
  authDomain: "music-school-bbdd5.firebaseapp.com",
  projectId: "music-school-bbdd5",
  storageBucket: "music-school-bbdd5.appspot.com",
  messagingSenderId: "737510459582",
  appId: "1:737510459582:web:12f20993d59a81d071b6ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;