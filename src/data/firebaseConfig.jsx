//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyD0gaYtzA46rzwzCZjcx7JkfC4Rz6CXD7w",
  authDomain: "piscium-srl.firebaseapp.com",
  projectId: "piscium-srl",
  storageBucket: "piscium-srl.appspot.com",
  messagingSenderId: "249526766251",
  appId: "1:249526766251:web:9de65580d60c99a310c5ee",
  measurementId: "G-NSWSW4V5PP"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)


//const analytics = getAnalytics(app);