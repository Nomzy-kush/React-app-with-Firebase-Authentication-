// importing the app configuration keys we got from Firebase 


import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD0QMLCPnFtlE4jd5jl2NfY4Kkh7xgVBoA",
    authDomain: "react-firebase-auth-85a1f.firebaseapp.com",
    projectId: "react-firebase-auth-85a1f",
    storageBucket: "react-firebase-auth-85a1f.appspot.com",
    messagingSenderId: "31274860476",
    appId: "1:31274860476:web:9342f2c5e676bbd0f475b9",
    measurementId: "G-5QX8403GVB"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;