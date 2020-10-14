import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAK1JGGp3W-0vtVBmtIIH-yHw_WVxYJS9M",
    authDomain: "facebook-clone-c2329.firebaseapp.com",
    databaseURL: "https://facebook-clone-c2329.firebaseio.com",
    projectId: "facebook-clone-c2329",
    storageBucket: "facebook-clone-c2329.appspot.com",
    messagingSenderId: "640552925033",
    appId: "1:640552925033:web:0de275e8ec5056ff5deff8",
    measurementId: "G-KQBSRHQLQ3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provideer = new firebase.auth.GoogleAuthProvider();