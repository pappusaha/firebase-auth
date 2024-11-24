// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0C1_od9XJYlKW1g0eZ0H4Mh_G-t3mljA",
  authDomain: "fir-auth-e8066.firebaseapp.com",
  projectId: "fir-auth-e8066",
  storageBucket: "fir-auth-e8066.firebasestorage.app",
  messagingSenderId: "133659640183",
  appId: "1:133659640183:web:5878a4417d44ce7876e172"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  auth=getAuth(app)