import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAuHFwFW1fbGrydzoqogXi0ll3Qk0fZ89Y",
  authDomain: "linkedin-clone-7ac22.firebaseapp.com",
  projectId: "linkedin-clone-7ac22",
  storageBucket: "linkedin-clone-7ac22.appspot.com",
  messagingSenderId: "198786161215",
  appId: "1:198786161215:web:e2aac3f7c189984a85368a"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db= firebaseApp.firestore();
const auth= firebase.auth();

export {db, auth };
