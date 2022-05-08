// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1n7E5gi5Rrt_g04eZbIKediYlh1PH0g0",
    authDomain: "discord-bot-tony.firebaseapp.com",
    databaseURL: "https://discord-bot-tony-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "discord-bot-tony",
    storageBucket: "discord-bot-tony.appspot.com",
    messagingSenderId: "285993335461",
    appId: "1:285993335461:web:df425a1db832bfef486b4c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports.App = app;