import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD8CxUC--HftTuyTOYqxeBqjI1tv2LEbAk",
  authDomain: "react-native-firebase-fatz.firebaseapp.com",
  projectId: "react-native-firebase-fatz",
  storageBucket: "react-native-firebase-fatz.appspot.com",
  messagingSenderId: "635659267113",
  appId: "1:635659267113:web:0c835c90bb049fae4a4038"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db
};