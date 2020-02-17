import React, { useEffect, useState,   } from 'react';
import { getAllCharacters } from '../../../api/api';

export const MyMains = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();

  useEffect( () => {
    setIsLoading(true);
    const chars = sessionStorage.getItem('characters');
    const fetchData = async () => {
      if(chars) {
        const charsArray = chars.split(",");
        const formatedCharacters = charsArray.map((character, index) => ({
          'id': index,
          'data': {
            'name': character,
          },
        }));
        setCharacters(formatedCharacters);
        setIsLoading(false);
      }
      else {
        setCharacters(await getAllCharacters());
        setIsLoading(false);
      }
    }
    fetchData();
  }, [setCharacters]);

  return (
    <>
      {isLoading ?
        'Loading...'
          :
          (
            characters.map((character, index) => (
              <div key={index}>{character.data.name}</div>
            ))
          )
      }
    </>
  );
};
