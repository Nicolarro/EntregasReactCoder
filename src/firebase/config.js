// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqQowo-cl4B0NWF9PbwB6DBDl1bK73w2U",
  authDomain: "ecommerce-64a23.firebaseapp.com",
  projectId: "ecommerce-64a23",
  storageBucket: "ecommerce-64a23.appspot.com",
  messagingSenderId: "240718616075",
  appId: "1:240718616075:web:cdbad886b92932618e590e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


