// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuUU3_jadR6im8QJSpWS4hZdO2VOhfzAk",
  authDomain: "collections-46742.firebaseapp.com",
  projectId: "collections-46742",
  storageBucket: "collections-46742.appspot.com",
  messagingSenderId: "418567346794",
  appId: "1:418567346794:web:37f7a3f0b2ba3ffbc78813",
  measurementId: "G-QDJPBVYKC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app);