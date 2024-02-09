/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const serviceAccount = 'public/Key.json';

initializeApp({
    credential: cert(serviceAccount)
  });
  

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
