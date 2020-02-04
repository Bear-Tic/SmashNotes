import React, { useEffect, useState } from 'react';
import { getAllCharacters } from './api/api';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();

  useEffect( () => {
    const fetchData = async () => {
      setCharacters(await getAllCharacters());
      setIsLoading(false);
    }
    fetchData();
  }, [setCharacters]);

  return (
    <div className="App">
      {console.log('lala', characters)}
      <header className="App-header">
        {isLoading ?
          'Loading...'
            :
            (
              characters.map((character, index) => <div key={index}>{character.data.name}</div>)
            )
        }
      </header>
    </div>
  );
};

export default App;
