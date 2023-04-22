import axios from 'axios';

export const getInfo = (cep: string) => {
  const response = axios.get(`https://viacep.com.br/ws/${cep}/json`);
  return response;
};
