// firebase-config.js
const firebaseConfig = {
    apiKey: "AIzaSyBbGyX2TUVzWVTm8kMvRLhHyAl5nY6KJBM",
    authDomain: "onxdev-7cb3a.firebaseapp.com",
    databaseURL: "https://onxdev-7cb3a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "onxdev-7cb3a",
    storageBucket: "onxdev-7cb3a.firebasestorage.app",
    messagingSenderId: "448302778868",
    appId: "1:448302778868:web:af6ecc68882b9b3adf11a1",
    measurementId: "G-PPTZ7N0819"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();