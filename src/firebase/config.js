// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0hrEn2vJ5snsZfWYwIwhYaGWYaX7Es84",
  authDomain: "dormease-7ee49.firebaseapp.com",
  projectId: "dormease-7ee49",
  storageBucket: "dormease-7ee49.appspot.com",
  messagingSenderId: "1075926067659",
  appId: "1:1075926067659:web:449d8864b82c5967436e4e",
  measurementId: "G-EJFTVZVXDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)