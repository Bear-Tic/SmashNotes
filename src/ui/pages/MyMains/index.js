import React, { useEffect, useState } from 'react';
import { getAllCharacters } from '../../../api/api';
import { Card } from '@material-ui/core';

export const MyMains = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();

  // useEffect( () => {
  //   const fetchData = async () => {
  //     setCharacters(await getAllCharacters());
  //     setIsLoading(false);
  //   }
  //   fetchData();
  // }, [setCharacters]);

  return (
    <>
      {isLoading ?
        'Loading...'
          :
          (
            characters.map((character, index) => <Card key={index}>{character.data.name}</Card>)
          )
      }
    </>
  );
};
