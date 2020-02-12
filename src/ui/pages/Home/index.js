import React from 'react';
import * as firebase from 'firebase';
import 'firebase/auth';

export const Home = () => {
  const user = firebase.auth().currentUser;
  return (
    <>
      Hello {' '}
      {console.log(user)}
      {user && user.displayName}
    </>
  );
};
