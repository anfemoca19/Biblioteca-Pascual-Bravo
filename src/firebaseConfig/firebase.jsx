import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDB6Qsqvc3bzDxY4pAUcDRRgV1cB2vFB08",
  authDomain: "biblioteca-pascual-bravo.firebaseapp.com",
  projectId: "biblioteca-pascual-bravo",
  storageBucket: "biblioteca-pascual-bravo.appspot.com",
  messagingSenderId: "158218034802",
  appId: "1:158218034802:web:ef54e4bbe558b4bfc56ceb",
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
export const auth = getAuth(FirebaseApp);

export default FirebaseApp;
