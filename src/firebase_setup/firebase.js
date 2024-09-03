import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSmIgCo0YtYjSuDPFAS6ZN2nYisWDiV5k",
  authDomain: "bemyquest-cf370.firebaseapp.com",
  projectId: "bemyquest-cf370",
  storageBucket: "bemyquest-cf370.appspot.com",
  messagingSenderId: "48303415137",
  appId: "1:48303415137:web:ec4e2c9bd90051f4616f20",
  measurementId: "G-K849V6FE6K",
}; // Initialize Firebase


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);





