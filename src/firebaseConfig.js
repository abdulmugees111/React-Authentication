// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCGcFQUN1LGTW5V190gizp1HPqXyBqZdnY",
//   authDomain: "react-test-82cf4.firebaseapp.com",
//   projectId: "react-test-82cf4",
//   storageBucket: "react-test-82cf4.appspot.com",
//   messagingSenderId: "815855611778",
//   appId: "1:815855611778:web:8e9e310055b22c8783a99b",
//   measurementId: "G-P3TCWE0S21"
// };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// console.log("analytics",analytics)



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyAiIzpBclopeE3eMex5H1uV_g43dmigXu0",
  authDomain: "auth-firebase-54d67.firebaseapp.com",
  projectId: "auth-firebase-54d67",
  storageBucket: "auth-firebase-54d67.appspot.com",
  messagingSenderId: "914529374166",
  appId: "1:914529374166:web:840c805d20e17c867bde77",
  measurementId: "G-C97LZCE8Y5"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
