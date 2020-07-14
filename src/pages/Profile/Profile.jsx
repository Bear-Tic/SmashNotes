import React from 'react';
import { Button } from '@chakra-ui/core';
import { createUser, getUser } from 'api/api';
import { auth } from 'firebase';

export const Profile = ({ user, signOut, signInWithGoogle }) => {
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
    <div>
      {
      user ? (
        <div>
          <Button onClick={() => signOut()}>Déconnexion</Button>
        </div>
      ) : (
        <Button onClick={() => signIn()}>Connexion via Google</Button>
      )
    }
    </div>
  );
};
