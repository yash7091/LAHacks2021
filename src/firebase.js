import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwToWRoMTNgJmaplH_qjcLm0ePbigB1BI",
  authDomain: "la-hacks-a3643.firebaseapp.com",
  projectId: "la-hacks-a3643",
  storageBucket: "la-hacks-a3643.appspot.com",
  messagingSenderId: "869009936151",
  appId: "1:869009936151:web:82d9a2a251fe366244b152",
  measurementId: "G-EHCRWW9DM0"
});
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export default firebaseApp;
