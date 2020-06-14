import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCgMfU9aS6h8qjAF8NxzBHhTS84palI7UY",
    authDomain: "covid-hack-5267d.firebaseapp.com",
    databaseURL: "https://covid-hack-5267d.firebaseio.com",
    projectId: "covid-hack-5267d",
    storageBucket: "covid-hack-5267d.appspot.com",
    messagingSenderId: "1017511849431",
    appId: "1:1017511849431:web:cc93ae0b60b3090cfaef92",
    measurementId: "G-N63SSP8GL1"
  }

firebase.initializeApp(config);


export default firebase;