const functions = require("firebase-functions");

//import admin library
const admin = require('firebase-admin');

//we initialize the admin library
admin.initializeApp();

//from the admin library, we invoke the firebase module
const firestore = admin.firestore();

 exports.get = functions.https.onRequest(async (request, response) => {
    //logger.info("Hello logs!", {structuredData: true});

        //we execute an insertion inside the users collection of the object {name:'Jesse'}
        const result = await firestore.collection('users').add({name:"Jesse"})

        //return result to the navigator
        response.send(result);
 });

 exports.post = functions.https.onRequest((request, response) => {
    //logger.info("Hello logs!", {structuredData: true});
    response.send("Hello I am a Post");
 });
