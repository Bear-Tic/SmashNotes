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
import { Home } from 'pages/Home/Home';
import { Profile } from 'pages/Profile/Profile';
import { Signup } from 'pages/Signup/Signup';
import firebaseConfig from './firebase/firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const App = ({
  user,
  signOut,
  signInWithGoogle,
}) => {
  console.log({ user });
  return (
    <Router>
      <ViewportHeight bg="brand.50" direction="row">
        { user && (
          <Navbar />
        )}
        <Switch>
          <Flex direction="column" w={user ? 'calc(100% - 7rem)' : '100%'} ml={user ? '7rem' : 0}>
            <Route exact path="/">
              <Redirect to="/dashboard" />
            </Route>
            <Route exact path="/dashboard">
              <Home />
            </Route>
            <Route exact path="/profile">
              { user ? (
                <Profile
                  user={user}
                  signOut={signOut}
                  signInWithGoogle={signInWithGoogle}
                />
              ) : (
                <Redirect to="/signup" />
              )}
            </Route>
            <Route exact path="/signup">
              <Signup signInWithGoogle={signInWithGoogle} user={user} />
            </Route>
          </Flex>
        </Switch>
      </ViewportHeight>
    </Router>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);
