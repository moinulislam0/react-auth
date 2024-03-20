// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRESOP1vpnanbl6J2Hpy6FTlJ0HgK4JVY",
  authDomain: "react-dragon-auth-78738.firebaseapp.com",
  projectId: "react-dragon-auth-78738",
  storageBucket: "react-dragon-auth-78738.appspot.com",
  messagingSenderId: "754888270103",
  appId: "1:754888270103:web:9b65d74b295cdd991d1752"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default(auth);