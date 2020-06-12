const functions = require('firebase-functions'),
      express = require('express'),
      cors = require('cors');

var admin = require("firebase-admin");
var serviceAccount = require("./serviceAccountKey.json");
      
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://covid-hack-5267d.firebaseio.com"
});



           

//initialize firebase inorder to access its services
admin.initializeApp(functions.config().firebase);

//initialize express server
const app = express()
const main = express()
app.use(cors({ origin: true }));

//add the path to receive request and set json as bodyParser to process the body
main.use('/api/v1', app);
main.use(express.json());
main.use(express.urlencoded({ extended: false }));

//initialize the database and collection
const db = admin.firestore();
const userCollection = 'covid-hack-5267d.Volunteers-Registers';





//get all volunteers
app.get('/volunteers', async (req, res) => {
    try {
        const userQuerySnapshot = await db.collection(userCollection).get();
        const users = [];
        userQuerySnapshot.forEach(
            (doc)=>{
                users.push({
                
                    work: doc.work,
            });
            }
        );
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


//define google cloud function name
exports.volunteerApi = functions.https.onRequest(main);