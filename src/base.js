import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBFd1GpcT8ls5GL4ttZ44IXktLrCGPO8xI',
  authDomain: 'catch-of-the-day-b779a.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-b779a.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
