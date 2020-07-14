import axios from 'axios';
import { useQuery } from 'react-query';

export const useCharacters = (params) => useQuery(['characters', params],
  async () => axios.get('https://us-central1-smashnotes-b07e9.cloudfunctions.net/app/api/characters', { params }));
