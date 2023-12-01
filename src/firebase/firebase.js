// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9SftKlgHUoOGx8kTMHqXhnDEdb4ply-Y",
  authDomain: "knoor-72209.firebaseapp.com",
  projectId: "knoor-72209",
  storageBucket: "knoor-72209.appspot.com",
  messagingSenderId: "200509945286",
  appId: "1:200509945286:web:26609cb85b03b437df6ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {auth}