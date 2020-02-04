import axios from 'axios';

export const getAllCharacters = async () => { 
  let response;
  try {
    response = await axios.get(`https://us-central1-smashnotes-b07e9.cloudfunctions.net/app/api/characters`);
  }
  catch (error) {
    response = error;
  }
  return response.data;
};