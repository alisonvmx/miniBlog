// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn5qQYPP5lQ8rqgyAS0yyRke4GCi5K0R0",
  authDomain: "miniblog-2f161.firebaseapp.com",
  projectId: "miniblog-2f161",
  storageBucket: "miniblog-2f161.appspot.com",
  messagingSenderId: "536624187203",
  appId: "1:536624187203:web:bf044f827ee1ce4a2491f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};