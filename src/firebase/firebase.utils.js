import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyD2aMbEAFHc4kNZ455Ggb6x0raYK8TJgKk',
  authDomain: 'react-form-for-portfolio.firebaseapp.com',
  projectId: 'react-form-for-portfolio',
  storageBucket: 'react-form-for-portfolio.appspot.com',
  messagingSenderId: '743340880329',
  appId: '1:743340880329:web:5f118edb7cdc47a6b73818',
  measurementId: 'G-JXHV730126',
});

const { db } = firebaseApp.firestore();
export { db };