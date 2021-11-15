import { useContext } from "react";
import firebase from "firebase";
import "firebase/storage";
import Context from "./store/context";
// import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB-jZHZRYsfojW3MVs25k5v-MQhAy6wnj0",
  authDomain: "educafacil-becf0.firebaseapp.com",
  projectId: "educafacil-becf0",
  storageBucket: "educafacil-becf0.appspot.com",
  messagingSenderId: "990785107815",
  appId: "1:990785107815:web:714df1451bc2b855b1a1c2",
  measurementId: "G-QHWH6CXEB4",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
var database = firebase.database();
const storage = firebase.storage();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    const query = await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
    if (query.docs.length === 0) {
      await db.collection("users").add({
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        role: "student",
      });
    }
  } catch (err) {
    console.error(err);
    console.log(err.message);
    // alert(err.message);
  }
};
const signInWithEmailAndPassword = async (email, password) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    console.error(err);
    console.log(err.message);
    // alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await auth.createUserWithEmailAndPassword(email, password);
    const user = res.user;
    await db.collection("users").add({
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    console.log(err.message);
    // alert(err.message);
  }
};
const sendPasswordResetEmail = async (email) => {
  try {
    await auth.sendPasswordResetEmail(email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};

export {
  auth,
  db,
  storage,
  database as default,
  signInWithGoogle,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordResetEmail,
  logout,
};

// // import firebase from "firebase";
// // import "firebase/storage";
// // import "firebase/auth";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyB-jZHZRYsfojW3MVs25k5v-MQhAy6wnj0",
// //   authDomain: "educafacil-becf0.firebaseapp.com",
// //   projectId: "educafacil-becf0",
// //   storageBucket: "educafacil-becf0.appspot.com",
// //   messagingSenderId: "990785107815",
// //   appId: "1:990785107815:web:714df1451bc2b855b1a1c2",
// //   measurementId: "G-QHWH6CXEB4",
// // };

// // // Initialize Firebase
// // firebase.initializeApp(firebaseConfig);
// // const storage = firebase.storage();
// // const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

// // // Get a reference to the database service
// // var database = firebase.database();

// // export const auth = firebase.auth();
// // export { storage, googleAuthProvider, database as default };
