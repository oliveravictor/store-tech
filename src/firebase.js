import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyC2fnztF0fgBzicxjnaG_P5iFHPs7LF5yU",
  authDomain: "storetech.firebaseapp.com",
  projectId: "storetech",
  storageBucket: "storetech.appspot.com",
  messagingSenderId: "343329553431",
  appId: "1:343329553431:web:8d654464aa267f1413b052",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
