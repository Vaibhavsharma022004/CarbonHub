// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "carbon-hub.firebaseapp.com",
  projectId: "carbon-hub",
  storageBucket: "carbon-hub.appspot.com",
  messagingSenderId: "971992102976",
  appId: "1:971992102976:web:44f1476b41cbf408abc7a5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);