import React, { useEffect, useState,   } from 'react';
import { getAllCharacters } from '../../../api/api';
import { CircularProgress, Grid, Card, Button } from '@material-ui/core';
import CustomInput from '../../components/CustomtInput';

export const MyMains = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characters, setCharacters] = useState();

  useEffect( () => {
    setIsLoading(true);
    const chars = sessionStorage.getItem('characters');
    const fetchData = async () => {
      if(chars) {
        const charsArray = chars.split(",");
        const formatedCharacters = charsArray.map((character, index) => {
          const parseCharacter = character.split("$");
          return {
            'id': index,
            'data': {
              'name': parseCharacter[0],
              'imgUrl': parseCharacter[1],
            },
          }
          });
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
    <div>
      <h1 className="u-mt-0 u-mb-3">Mes Mains</h1>
      <CustomInput className="u-mb-3" fullWidth variant="outlined" label="Rechercher un personnage" />
      {isLoading ?
        <CircularProgress color="primary" />
          :
          (
            <Grid container spacing={3}>
              {
                characters.map((character, index) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card>
                      <Grid container>
                        <Grid item container justify="center" xs={4}>
                          <img className="u-my-2" src={character.data.imgUrl} alt="" height="80px" />
                        </Grid>
                        <Grid className="u-text-center" item xs={8}>
                          <h2 className="u-mb-1">{character.data.name}</h2>
                          <Button color="primary">Choisir</Button>
                        </Grid>
                      </Grid>
                    </Card>
                  </Grid>
                ))
              }
            </Grid>
          )
      }
    </div>
  );
};
