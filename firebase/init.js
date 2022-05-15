// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_AUTH_API_KEY,
    authDomain: "discord-bot-tony.firebaseapp.com",
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: "discord-bot-tony",
    storageBucket: "discord-bot-tony.appspot.com",
    messagingSenderId: "285993335461",
    appId: "1:285993335461:web:df425a1db832bfef486b4c"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports.App = app;