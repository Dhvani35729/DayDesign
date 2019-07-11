import firebase from 'react-native-firebase';

// var db = firebase.firestore();
const user = firebase.auth ().currentUser;
const API_SERVER = 'http://localhost:8000';
// const API_SERVER = 'https://dashboard.uwbiteclub.com';

export {user, API_SERVER};
