/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

//import { initializeApp, cert } from '/firebase-admin/app';
import { cert } from 'firebase-admin/app';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
//import { admin } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
//import { getFirestore } from '/firebase-admin/firestore';
import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js';
//const serviceAccount = 'public/Key.json';

initializeApp({
  credential: cert({
    projectId: "distancecontrol-23038",
    clientEmail: "firebase-adminsdk-4932v@distancecontrol-23038.iam.gserviceaccount.com",
    privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDKotgPZukhd347\ndl5HT+fByKTvzaKbevtug3o0Zb/znJeEdcPwQMzHuY4X+H8RENA/0+eYbwJfgM6G\nXF3DCTspmUl/lhix4vo4tfW+RGyQpL7i9QXKdIKj+v4K3Nu0BMQzotqnSrTYwk1d\nikn9X4Exsz31LkuEWqMCgVbV15S63yPpNJLAXmFN30u9aKHf/0pw6NC+bvUih356\nZi2Zb+QFsW7YTNsFflJdGADGuepkb5AKLWOhGBzqE3F3NgNdfOAJuNr8Q+J+Zx4x\n+NeTlxydUA60MVmftGnDSq8BJ/OMALRCUTSCpRGGtIQmzMUowuXz0Bh4mm56MwnF\nSTOw8bgxAgMBAAECggEALuZm7JWsksbl7BxW8NlxMhxe9HPbVXIu/KKop7T/KwLM\n3Ocm7RYKb5WmaizlOA10rbk9ir3yxij5ZAa/2tLpoxSr+sBCQfXfZT3UPW/30riW\nx8/fQb8at5pxrxD0NuO9h5gDVKIJXnwGTQajXmX68IZkajmHWABkZ0GJWCA399Ih\nBk5gPt8dvkz4yxbjyT7gm1TWvyF++oQ+z0aFXP+A4cJPk9oFU9DCde/njSl769kT\nh93MiHwSwxKtZhJnRA+d2NM5vIDyvadjhbe5xv2Ot8ZqScYGzBOyzGNhTMC3YcTE\nOawsLfkurhsPZZ0sE5TcB/Zlt30lxJxTPM6Jfk9aewKBgQDy9hhyZKnpprJOmhju\nnfCZEDMaME5y6jttVDm9IPo9BK7QwjWo/Wzr+8bPnCeAPWrnaDUJAHXBMi5zaZWZ\nbr2X4Ta/E6aSZ3hdhXeqQSj0HkQqQrpQHgAwk7oxGxPUeiK34qIZPZj0+haBzlwi\n+D92xihGJgl1mbv0x2ns5Anm6wKBgQDVgr5zBJrLoFhnTVuEKy+qLRnCVf1eZel/\n1CMP0K/QFA2BiTUfuP9UDodmxEvVUyBhobyaNy0MykqilWxGWQ7TOfMQ9+s9F7tr\nAy5cfWKgrB910+DdGe9yeT0BkkztZpq9PNWl2E+EGABAJ6ODxdFNoTSoZLHPhgts\n+D0xRJEOUwKBgQCBB8th7S4DpYDql5IIH57oWx8YmHEBPH5FCMcFN19OSo9g1NNU\npQpUpUknduHPjE6bCM+psTHYYYMjzf4iFxrfbz746UG8XPEikcBEjghm5TAEVZ3G\n8LffFIV8kMnOPPL1P4og54K1D6AmXea2t6pUtNYsswSxDO0yCTmrEkxj8wKBgQDH\nR8XccrLMVffNS12cqfZOHtRJF5tprTNYdTbYfw5p5x2IBvmHh1MBMKJeX97r2C+E\nEMKJKfCpXHJ294Jc0qjMq+zbrJpqpijuw8RU3U7d6mlev4jEtX1RWil/uv6EIl1R\nPWOn7JKjFwe82YJ77nnhvBH7DikMKe+mILh0sKu3MwKBgQDe+KV53c8Gy1aI3d0f\n83O05CY6UIISz3h+gRvhnYxjBOhvvRouqYyg8s4xkkwFE2L6cw82qlTX8XSZWAu8\niRAvvXfW9J37WE+XUmPaD3PeN7MdujlJOuF5+5dwQRIjJ44my6Rr42hHQGXPw9cm\nP/K6EsfBguntLrNHFXcbbzZpCw==\n-----END PRIVATE KEY-----\n"}),
  databaseURL: "https://distancecontrol-23038-default-rtdb.europe-west1.firebasedatabase.app"
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
