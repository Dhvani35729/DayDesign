// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
exports.addMessage = functions.https.onCall((data, context) => {
  // Grab the text parameter.
  console.log(data)
  const original = data.text;
  // const sanitizedMessage = sanitizer.sanitizeText(original); // Sanitize the message.
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  return admin.database().ref('/messages').push({original: original}).then(() => {
      console.log('New Message written');
    // Returning the sanitized message to the client.
      return { text: sanitizedMessage };
    }
  );
});

//
// exports.createGroup = functions.https.onCall((data, context) => {
//
// // Message text passed from the client.
// const text = data.text;
//
// // Authentication / user information is automatically added to the request.
// const uid = context.auth.uid;
// const email = context.auth.token.email || null;
//
// });

exports.setName = functions.https.onCall((data, context) => {

// Message text passed from the client.
const name = data.name;
// Authentication / user information is automatically added to the request.
const uid = context.auth.uid;
const email = context.auth.token.email || null;
console.log(context.auth)
// email check
// Checking that the user is authenticated.
if (!context.auth) {
  // Throwing an HttpsError so that the client gets the error details.
  throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
      'while authenticated.');
}
console.log(email.substring(email.indexOf("@")))
if(email.substring(email.indexOf("@")).localeCompare("@wbc.com") === 0){

console.log("good email")

var updates_1 = {};
updates_1['/name/'] = name;
admin.database().ref("users/" + uid).update(updates_1).then(() => {
    console.log('New Message written');
  // Returning the sanitized message to the client.
    return { text: sanitizedMessage };
  }
).catch(function(error) {
  console.log("Data could not be saved." + error);
});

}
else{
  console.log("here")
  throw new functions.https.HttpsError('failed-precondition', 'The function must be called ' +
      'while authenticated.');

}

});
