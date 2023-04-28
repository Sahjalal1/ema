// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBn0qlLJ4uq0FYnNol5Z9kdeVl8j-TRUVg",
  authDomain: "ema-john-with-firebase-a-9b50c.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-9b50c",
  storageBucket: "ema-john-with-firebase-a-9b50c.appspot.com",
  messagingSenderId: "831847072088",
  appId: "1:831847072088:web:00db0c4b0d5bcd4044e52d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;