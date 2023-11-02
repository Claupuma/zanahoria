// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
import { getStorage, ref, uploadBytes} from "firebase/storage";
import { getFirestore, addDoc, collection, getDoc, query, where, setDoc, deleteDoc, updateDoc} from "firebase/firestore";
import App from "../App";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBU0R5YR2NtCVx70NndA4QC-tGSs5k5W1E",
  authDomain: "proyecto-clau-2d8f8.firebaseapp.com",
  projectId: "proyecto-clau-2d8f8",
  storageBucket: "proyecto-clau-2d8f8.appspot.com",
  messagingSenderId: "59689588444",
  appId: "1:59689588444:web:c43b8bac46aecc36558619",
  measurementId: "G-69DE71YFW4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);