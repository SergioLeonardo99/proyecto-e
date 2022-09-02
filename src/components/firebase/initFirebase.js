import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBxNcw2FaXVy1LwIHeJavCI33NtvNZX23Q",
  authDomain: "m-subate.firebaseapp.com",
  projectId: "m-subate",
  storageBucket: "m-subate.appspot.com",
  messagingSenderId: "385200448205",
  appId: "1:385200448205:web:9cf4364d75d51ee7217f84",
  measurementId: "G-6ZZYN2Q187",
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();


export default db;