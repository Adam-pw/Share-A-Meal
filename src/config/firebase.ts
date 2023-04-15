import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp7w2DBfsLWzl_sN5c18pj3X5XZw44mUc",
  authDomain: "ngo-waste.firebaseapp.com",
  projectId: "ngo-waste",
  storageBucket: "ngo-waste.appspot.com",
  messagingSenderId: "496016345009",
  appId: "1:496016345009:web:ce039375cab293eeb8df90",
  measurementId: "G-0HZLED8PKC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { app, auth, db };
