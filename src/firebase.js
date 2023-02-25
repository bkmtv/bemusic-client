import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCuUU3_jadR6im8QJSpWS4hZdO2VOhfzAk",
  authDomain: "collections-46742.firebaseapp.com",
  projectId: "collections-46742",
  storageBucket: "collections-46742.appspot.com",
  messagingSenderId: "418567346794",
  appId: "1:418567346794:web:37f7a3f0b2ba3ffbc78813",
  measurementId: "G-QDJPBVYKC7",
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
