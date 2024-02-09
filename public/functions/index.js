/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import { initializeApp, cert } from '/firebase-admin/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
//import { admin } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
//import { getFirestore } from '/firebase-admin/firestore';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
//const serviceAccount = 'public/Key.json';
//te rog porneste
const firebaseConfig = {

  apiKey: "AIzaSyC7aPgBuObzReW9N1Xcb6RmjpaQmYzRnsE",

  authDomain: "distancecontrol-23038.firebaseapp.com",

  databaseURL: "https://distancecontrol-23038-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "distancecontrol-23038",

  storageBucket: "distancecontrol-23038.appspot.com",

  messagingSenderId: "374392657005",

  appId: "1:374392657005:web:581ebf058efdf766c01b64",

  measurementId: "G-RNEHZSCQKV"

};


initializeApp({ firebaseConfig });
  

TestFunc();
async function TestFunc(){
const db = getFirestore();
const docRef = db.collection("Test").doc("Bogdan e gay");
await docRef.set({
    Nume : "Bogdan",
    Varsta : "Gay"
    });
}

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
