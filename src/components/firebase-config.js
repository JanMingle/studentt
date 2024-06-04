// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBRXj_6atDaKf-XIww0_o4xWtCid0F52Vs",
  authDomain: "student-ad2c8.firebaseapp.com",
  projectId: "student-ad2c8",
  storageBucket: "student-ad2c8.appspot.com",
  messagingSenderId: "915848380782",
  appId: "1:915848380782:web:8a471d9062943efc6c017f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore database

export { db }; // Export the db variable