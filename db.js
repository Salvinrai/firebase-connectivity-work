const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');


var admin = require("firebase-admin");

var serviceAccount = require("./servie-firebase/practice-27d9b-firebase-adminsdk-79xv8-8bda8379a3.json");

admin.initializeApp({
    apiKey: "AIzaSyBzscAdgQ_qJWKwhFK0WHLl2PePBhgRz9s",
    authDomain: "practice-27d9b.firebaseapp.com",
    projectId: "practice-27d9b",
    storageBucket: "practice-27d9b.appspot.com",
    messagingSenderId: "742747059509",
    appId: "1:742747059509:web:65db217e213b410f9c087c",
    measurementId: "G-Z5JW1JVKM5",
  credential: admin.credential.cert(serviceAccount)
});


// initializeApp({
//     apiKey: "AIzaSyBzscAdgQ_qJWKwhFK0WHLl2PePBhgRz9s",
//     authDomain: "practice-27d9b.firebaseapp.com",
//     projectId: "practice-27d9b",
//     storageBucket: "practice-27d9b.appspot.com",
//     messagingSenderId: "742747059509",
//     appId: "1:742747059509:web:65db217e213b410f9c087c",
//     measurementId: "G-Z5JW1JVKM5"
   
// });

const db = getFirestore();

module.exports = db;