// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpEQk8A6-jnZ2u7sREGdaGGti8z0DmnnA",
  authDomain: "booking-campsites-41dc0.firebaseapp.com",
  projectId: "booking-campsites-41dc0",
  storageBucket: "booking-campsites-41dc0.appspot.com",
  messagingSenderId: "46809701441",
  appId: "1:46809701441:web:f21cf71ad00f5885387ac0"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()