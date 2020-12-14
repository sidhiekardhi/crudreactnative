import firebase from 'firebase';
  // Initialize Firebase
  firebase.initializeApp( {
    apiKey: "AIzaSyBEenYU9sNGpwCXZJIKzwtKEIpQSdsZ9TI",
    authDomain: "crud-news-react-native.firebaseapp.com",
    projectId: "crud-news-react-native",
    storageBucket: "crud-news-react-native.appspot.com",
    messagingSenderId: "582028421012",
    appId: "1:582028421012:web:71bd60c12972a11f855181"
  });
const FIREBASE = firebase;
export default FIREBASE;