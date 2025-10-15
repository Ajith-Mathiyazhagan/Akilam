// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAr4lIlttHtISD7BxxWwGjNKLMVjtqsW2M",
  authDomain: "akilam-57f7d.firebaseapp.com",
  projectId: "akilam-57f7d",
  storageBucket: "akilam-57f7d.appspot.com",
  messagingSenderId: "1054310371159",
  appId: "1:1054310371159:web:346234708f374cc2613812",
  measurementId: "G-J2HBJSRV8V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);