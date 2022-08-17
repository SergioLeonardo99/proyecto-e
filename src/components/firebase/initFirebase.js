import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBxNcw2FaXVy1LwIHeJavCI33NtvNZX23Q",
  authDomain: "m-subate.firebaseapp.com",
  projectId: "m-subate",
  storageBucket: "m-subate.appspot.com",
  messagingSenderId: "385200448205",
  appId: "1:385200448205:web:20cbf9e774e80f0c217f84",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service

