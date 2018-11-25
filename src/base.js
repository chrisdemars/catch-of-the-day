import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCA7zanUSdiAMg9U-GOLB5XGPz4fX7rXZ4',
  authDomain: 'catch-of-the-day-chris-demars.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-chris-demars.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
