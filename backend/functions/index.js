const functions = require('firebase-functions');
const app = require('express')();

const {
    getAllVolunteers
} = require('./api/volunteers')

app.get('/volunteers', getAllVolunteers);





exports.api = functions.https.onRequest(app);
