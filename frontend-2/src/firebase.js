import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB-jZHZRYsfojW3MVs25k5v-MQhAy6wnj0",
  authDomain: "educafacil-becf0.firebaseapp.com",
  projectId: "educafacil-becf0",
  storageBucket: "educafacil-becf0.appspot.com",
  messagingSenderId: "990785107815",
  appId: "1:990785107815:web:714df1451bc2b855b1a1c2",
  measurementId: "G-QHWH6CXEB4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

// Get a reference to the database service
var database = firebase.database();

export { storage, database as default };
