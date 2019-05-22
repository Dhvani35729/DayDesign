import firebase from 'react-native-firebase';

var db = firebase.firestore();
const user = firebase.auth();

export {db, user};