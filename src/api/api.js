import axios from 'axios';

export const getAllCharacters = async () => {
  let response;
  try {
    response = await axios.get('https://us-central1-smashnotes-b07e9.cloudfunctions.net/app/api/characters');
  } catch (error) {
    response = error;
  }
  const characters = response.map((character) => `${character.data.name}$${character.data.imgUrl}`);
  sessionStorage.setItem('characters', characters);
  return response || response;
};

export const getAllUser = async () => {
  let response;
  try {
    response = await axios.get('https://us-central1-smashnotes-b07e9.cloudfunctions.net/app/api/users');
  } catch (error) {
    response = error;
  }
  return response;
};

export const getUser = async (id) => {
  let response;
  try {
    response = await axios.get(`https://us-central1-smashnotes-b07e9.cloudfunctions.net/app/api/users/${id}`);
  } catch (error) {
    response = error;
  }
  return response || response;
};

export const createUser = async (id, mail) => {
  let response;
  try {
    response = await axios.post('https://us-central1-smashnotes-b07e9.cloudfunctions.net/app/api/create/user', {
      id,
      mail,
    });
  } catch (error) {
    response = error;
  }
  return response;
};
