import firebase from 'firebase';

const  firebaseConfig = {
    apiKey: "AIzaSyBnWeZBV_AjmhkBceib1DH7Lq23Zn1lqKM",
    authDomain: "school-attendence-app-8a683.firebaseapp.com",
    databaseURL: "https://school-attendence-app-8a683-default-rtdb.firebaseio.com",
    projectId: "school-attendence-app-8a683",
    storageBucket: "school-attendence-app-8a683.appspot.com",
    messagingSenderId: "804320384194",
    appId: "1:804320384194:web:94bc1d4b8245260621175b"
  };

   // Initialize Firebase
   
  firebase.initializeApp(firebaseConfig);


export default  firebase.database();