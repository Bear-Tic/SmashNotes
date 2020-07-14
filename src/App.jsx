import React from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase';
import 'firebase/auth';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Flex,
} from '@chakra-ui/core';
import { ViewportHeight } from 'layout/ViewportHeight';
import { Navbar } from 'layout/Navbar';
import { Home } from 'pages/Home';
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
  <Router>
    <ViewportHeight bg="brand.50" direction="row">
      {/* navbar */}
      <Navbar />
      <Switch>
        <Flex direction="column" w="calc(100% - 7rem)" ml="7rem">
          <Route exact path="/">
            <Redirect to="/dashboard" />
          </Route>
          <Route exact path="/dashboard">
            <Home />
          </Route>
        </Flex>
      </Switch>
    </ViewportHeight>
  </Router>
);

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
