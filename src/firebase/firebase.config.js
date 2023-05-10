// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBr4TkcSMtTfTqr6AZyzcCT4yMs84bGbho",
  authDomain: "doctor-car-d81a6.firebaseapp.com",
  projectId: "doctor-car-d81a6",
  storageBucket: "doctor-car-d81a6.appspot.com",
  messagingSenderId: "735935046621",
  appId: "1:735935046621:web:da53c9396b5d35d8eccc34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;