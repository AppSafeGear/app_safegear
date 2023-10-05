import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAUlLzng_p2B_TTsxoFwGQPfZfWvf41Ui0",
    authDomain: "safegear-7e6ac.firebaseapp.com",
    databaseURL: "https://safegear-7e6ac-default-rtdb.firebaseio.com/",
    projectId: "safegear-7e6ac",
    storageBucket: "safegear-7e6ac.appspot.com",
    messagingSenderId: "998569861476",
    appId: "1:998569861476:web:40533585da70e0fc755a71"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export default firebase;