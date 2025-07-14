// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCutVg4GrWJPyenzyZsA9DDRrX8xMR7n-0",
  authDomain: "sts-42d8e.firebaseapp.com",
  projectId: "sts-42d8e",
  storageBucket: "sts-42d8e.firebasestorage.app",
  messagingSenderId: "965387567702",
  appId: "1:965387567702:web:d7b45e5106f101cd0f71f7",
  measurementId: "G-M269BQYWD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Export the app instance for potential future use
export default app; 