// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfeGMw1XEIZMmxd4EzMtgu_roBLFtA9HA",
  authDomain: "analytics-dad4c.firebaseapp.com",
  projectId: "analytics-dad4c",
  storageBucket: "analytics-dad4c.firebasestorage.app",
  messagingSenderId: "116493493773",
  appId: "1:116493493773:web:cecc44ad4bd5db54125744",
  measurementId: "G-C052T7NHQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);