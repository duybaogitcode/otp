import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBTOuqXhyiLrCi7TmgWWie9GfgYw7oCkdQ',
  authDomain: 'fxchangesapmle.firebaseapp.com',
  projectId: 'fxchangesapmle',
  storageBucket: 'fxchangesapmle.appspot.com',
  messagingSenderId: '317709531032',
  appId: '1:317709531032:web:7eea6872b10d3f708cdded',
  measurementId: 'G-C81H4FHSBP',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
