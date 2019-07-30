import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
var zip = new require('node-zip')();

admin.initializeApp(functions.config().firebase)
//
 export const helloWorld = functions.https.onRequest((request, response) => {
  //response.send("Hello from Firebase!");
    var db = admin.database();
    var ref = db.ref("server/saving-data/fireblog/posts");
 });
