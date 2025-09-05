// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGg7TeA_yq6JXfOY4u53RkXnSAfXy8rOo",
  authDomain: "autenficacion-app.firebaseapp.com",
  projectId: "autenficacion-app",
  storageBucket: "autenficacion-app.firebasestorage.app",
  messagingSenderId: "729873228510",
  appId: "1:729873228510:web:e1d1dc97c8fe6876b2584f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);