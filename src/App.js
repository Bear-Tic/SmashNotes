import React from 'react';
import { Body } from './ui/components/Body';
import { Header } from './ui/components/Header';
import Nav from './ui/components/Nav';
import { BrowserRouter as Router } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from './firebase/firebase';
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = ({ user, signOut, signInWithGoogle }) => {
  return (
    <>
      <div className="p-body">
        <Router>
          <Header user={user} signOut={signOut} signInWithGoogle={signInWithGoogle} />
          <div>
            <Body user={user} />
          </div>
          <Nav />
        </Router>
      </div>
    </>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
