import React from 'react';
import { Button } from '@chakra-ui/core';
import { createUser, getUser } from 'api/api';
import { auth } from 'firebase';
import {
  Redirect,
} from 'react-router-dom';

export const Signup = ({ signInWithGoogle, user }) => {
  const signIn = async () => {
    await signInWithGoogle();
    const user = await auth().currentUser;
    if (user && user.uid && user.email) {
      const test = await getUser(user.uid);
      if (!test.id && test.status === 200) {
        createUser(user.uid, user.email);
      }
    }
  };

  return (
    <>
      { user ? (
        <Redirect to="/profile" />
      ) : (
        <Button onClick={() => signIn()}>Connexion via Google</Button>
      )}
    </>
  );
};
