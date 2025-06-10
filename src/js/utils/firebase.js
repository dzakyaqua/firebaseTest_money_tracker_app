// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
 
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQIPlP9GbeTUvtLtp9n871RLwrv1DsKrU",
  authDomain: "money-tracker-app-e1e16.firebaseapp.com",
  projectId: "money-tracker-app-e1e16",
  storageBucket: "money-tracker-app-e1e16.firebasestorage.app",
  messagingSenderId: "742383750170",
  appId: "1:742383750170:web:e4f214738d2f06f86895a3",
  measurementId: "G-9V1Z4W6F1E"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
 
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, auth, db };