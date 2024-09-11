import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCawPw7FCWkBx3kgV8QyWYoyWjFRQBho9I",
  authDomain: "ecommerce-app-akij-ibos.firebaseapp.com",
  projectId: "ecommerce-app-akij-ibos",
  storageBucket: "ecommerce-app-akij-ibos.appspot.com",
  messagingSenderId: "854903670643",
  appId: "1:854903670643:web:0b4b79dd3a47e59b466706",
  measurementId: "G-RZRL62JT94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;