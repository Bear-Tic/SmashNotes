import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebase/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = (
  // user,
  // signOut,
  // signInWithGoogle
) => (
  <>
    <div>
      oui
      <Router />
    </div>
  </>
);

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
