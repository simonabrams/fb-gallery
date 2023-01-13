// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_0W4QahE1rQm58A4LHyiCqMv5uN39PfY",
  authDomain: "fb-gallery-7fead.firebaseapp.com",
  projectId: "fb-gallery-7fead",
  storageBucket: "fb-gallery-7fead.appspot.com",
  messagingSenderId: "538328332646",
  appId: "1:538328332646:web:bb74f1231dcb51cf73b0a7",
  measurementId: "G-62RPPQ09VX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
