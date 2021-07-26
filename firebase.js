// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAkTJIp4jds86AMlGWJ5Xc778nLgvcCr9I",
    authDomain: "signalclone-5f633.firebaseapp.com",
    projectId: "signalclone-5f633",
    storageBucket: "signalclone-5f633.appspot.com",
    messagingSenderId: "477301394503",
    appId: "1:477301394503:web:67d5eb8933f6fb402cb562",
    measurementId: "G-9YWKDDVYS5"
  };


 let app = firebase.initializeApp(firebaseConfig);
 

 const db = app.firestore();
 const auth = firebase.auth();

 export {db ,auth};