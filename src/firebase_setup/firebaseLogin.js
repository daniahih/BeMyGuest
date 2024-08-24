import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNs0KCVVzI0I_a4qWENyTjPkJeIN393JA",
  authDomain: "login-56e44.firebaseapp.com",
  projectId: "login-56e44",
  storageBucket: "login-56e44.appspot.com",
  messagingSenderId: "35210538670",
  appId: "1:35210538670:web:c90398883c0f12da55c73f",
};

// Initialize Firebase with disabled heartbeats
const app = initializeApp(firebaseConfig, {
  heartbeatInterval: 0, // Disables heartbeats collection
});
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
export default app;
