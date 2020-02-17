import React from 'react';
import "./scss/index.scss";
import { Body } from './ui/components/Body';
import { Header } from './ui/components/Header';
import Nav from './ui/components/Nav';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, Container } from '@material-ui/core';
import theme from './config/theme/theme';
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

const App = ({ user, signOut, signInWithGoogle }) => {
  return (
    <>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div className="p-body">
          <Router>
            <Header user={user} signOut={signOut} signInWithGoogle={signInWithGoogle} />
            <div className="p-body__main">
              <Container>
                <Body user={user} />
              </Container>
            </div>
            <Nav />
          </Router>
        </div>
      </MuiThemeProvider>
    </>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
