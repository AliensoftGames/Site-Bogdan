/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import { initializeApp, cert } from '/firebase-admin/app';
import { adminsdk } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
//import { admin } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
//import { getFirestore } from '/firebase-admin/firestore';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
//const serviceAccount = 'public/Key.json';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
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
