const functions = require('firebase-functions'),
      admin = require('firebase-admin'),
      express = require('express');


    

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express()
const main = express()

//add the path to receive request and set json as bodyParser to process the body
main.use('/api/v1', app);
main.use(express.json());
main.use(express.urlencoded({ extended: false }));

//initialize the database and collection
const db = admin.firestore();
const userCollection = 'users';

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
