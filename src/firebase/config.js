import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAqQowo-cl4B0NWF9PbwB6DBDl1bK73w2U",
  authDomain: "ecommerce-64a23.firebaseapp.com",
  projectId: "ecommerce-64a23",
  storageBucket: "ecommerce-64a23.appspot.com",
  messagingSenderId: "240718616075",
  appId: "1:240718616075:web:cdbad886b92932618e590e"
};

/* REACT_APP_APIKEY: AIzaSyAqQowo-cl4B0NWF9PbwB6DBDl1bK73w2U  
REACT_APP_AUTH: ecommerce-64a23.firebaseapp.com
REACT_APP_PROYECTID: ecommerce-64a23
REACT_APP_STORAGE: ecommerce-64a23.appspot.com
REACT_APP_MESSENGER: 240718616075
REACT_APP_APPID: 1:240718616075:web:cdbad886b92932618e590e */

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
