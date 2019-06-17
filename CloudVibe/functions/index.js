// The Cloud Functions for Firebase SDK to create Cloud Functions and setup triggers.
const functions = require ('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require ('firebase-admin');
admin.initializeApp ();

exports.setName = functions.https.onCall ((data, context) => {
  // Message text passed from the client.
  const name = data.name;
  // Authentication / user information is automatically added to the request.
  const uid = context.auth.uid;
  const email = context.auth.token.email || null;
  // console.log(context.auth)
  // email check
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError (
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    );
  }
  // console.log(email.substring(email.indexOf("@")))
  if (email.substring (email.indexOf ('@')).localeCompare ('@wbc.com') === 0) {
    var updates_1 = {};
    updates_1['/name/'] = name;
    admin
      .database ()
      .ref ('users/' + uid)
      .update (updates_1)
      .then (() => {
        // Returning the sanitized message to the client.
        return {text: 'Success'};
      })
      .catch (function (error) {
        console.log ('Data could not be saved.' + error);
      });
  } else {
    throw new functions.https.HttpsError (
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    );
  }
});

exports.createGroup = functions.https.onCall ((data, context) => {
  // Message text passed from the client.
  const newGroupName = data.groupName;
  const newGroupLocation = data.groupLocation;
  const newGroupTime = data.groupTime;

  // Authentication / user information is automatically added to the request.
  const uid = context.auth.uid;
  const email = context.auth.token.email || null;
  // console.log(context.auth)
  // email check
  // Checking that the user is authenticated.
  if (!context.auth) {
    // Throwing an HttpsError so that the client gets the error details.
    throw new functions.https.HttpsError (
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    );
  }
  // console.log(email.substring(email.indexOf("@")))
  if (email.substring (email.indexOf ('@')).localeCompare ('@wbc.com') === 0) {
    var groupCount = 0;
    admin
      .database ()
      .ref ('groups_count')
      .once ('value')
      .then (function (snapshot) {
        groupCount = snapshot.val ();

        var updates = {};
        updates['/key/'] = groupCount;
        updates['/creator/'] = uid;
        updates['/free_food/'] = false;
        updates['/group_name/'] = newGroupName;
        updates['/location_name/'] = newGroupLocation;
        updates['/time/'] = newGroupTime;
        updates['/number_going/'] = 1;
        updates['/people/' + uid + '/prompt'] = 'Group Creator';

        var date = new Date ().getDate (); //Current Date
        var month = new Date ().getMonth () + 1; //Current Month
        var year = new Date ().getFullYear (); //Current Year

        updates['/date_stamp/'] =
          year + '-' + ('0' + date).slice (-2) + '-' + ('0' + month).slice (-2);

        admin
          .database ()
          .ref ('groups/' + groupCount)
          .update (updates)
          .then (() => {
            // Returning the sanitized message to the client.

            var update_count = {};
            update_count['/groups_count/'] = ++groupCount;
            admin
              .database ()
              .ref ()
              .update (update_count)
              .then (() => {
                // Returning the sanitized message to the client.

                return {text: 'Success'};
              })
              .catch (function (error) {
                console.log ('Data could not be saved.' + error);
              });

            return {text: 'Success'};
          })
          .catch (function (error) {
            console.log ('Data could not be saved.' + error);
          });

        return {text: 'Success'};
      })
      .catch (function (error) {
        console.log ('Data could not be saved.' + error);
      });
  } else {
    throw new functions.https.HttpsError (
      'failed-precondition',
      'The function must be called ' + 'while authenticated.'
    );
  }
});
