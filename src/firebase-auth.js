// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth , GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD4cvfImCI0cpBXyBDV2utT_NCeFTuw0dg",
  authDomain: "incu-bot-5f790.firebaseapp.com",
  projectId: "incu-bot-5f790",
  storageBucket: "incu-bot-5f790.appspot.com",
  messagingSenderId: "566180641193",
  appId: "1:566180641193:web:49e545c40452efa1a0ecb8",
  measurementId: "G-KFNHTLKR62"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, provider, app, db}