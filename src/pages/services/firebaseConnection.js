import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBOMu-meJ4lLOLBGXfrW_KXH9YZPEGPZg8",
    authDomain: "safe-gear.firebaseapp.com",
    projectId: "safe-gear",
    storageBucket: "safe-gear.appspot.com",
    messagingSenderId: "105210769989",
    appId: "1:105210769989:web:c8a52951fd6e5eaad7e92c",
    measurementId: "G-J4N01S2VRP"
  };

if(!firebase.getApps.length){
    firebase.initializeApp(firebaseConfig)
}

export  default firebase;

