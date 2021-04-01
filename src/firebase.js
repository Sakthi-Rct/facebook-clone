import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuvCEr0Nt_RaxPe8dKMCCBJFHwyIGv5z0",
  authDomain: "facebook-clone-1fca6.firebaseapp.com",
  projectId: "facebook-clone-1fca6",
  storageBucket: "facebook-clone-1fca6.appspot.com",
  messagingSenderId: "50855535974",
  appId: "1:50855535974:web:88ad2146c3a67ff00c14a7",
  measurementId: "G-28DFVX6MRM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
