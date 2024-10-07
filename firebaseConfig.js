// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoNfYdPNpGTcEEsWBd5bPG0T3kcSeo-9I",
  authDomain: "pimobile-f29d9.firebaseapp.com",
  projectId: "pimobile-f29d9",
  storageBucket: "pimobile-f29d9.appspot.com",
  messagingSenderId: "266549091672",
  appId: "1:266549091672:web:d0736d912b8ac2c7e1992d",
  measurementId: "G-V5Q4VE53B7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export  {db} ;
export default app;