// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVQvqnXitihifeVA0byoYbW27LJfVBuEM",
  authDomain: "contactform-email-25465.firebaseapp.com",
  projectId: "contactform-email-25465",
  storageBucket: "contactform-email-25465.appspot.com",
  messagingSenderId: "741416653473",
  appId: "1:741416653473:web:ee195f51167a5a4e8f16e0"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db=getFirestore()