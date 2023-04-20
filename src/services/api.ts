import axios, { AxiosRequestHeaders } from 'axios';
let cookie = '';

interface CommonHeaderProperties extends AxiosRequestHeaders {
  authenticator: string;
}

export const API = axios.create({
  baseURL: 'https://6256fc506ea7037005434e84.mockapi.io/api/v1/',
  headers: {
    authenticator: cookie,
  } as CommonHeaderProperties,
  validateStatus: function (status) {
    return status <= 500;
  },
});

export type Options = {
  method: 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
  params?: any;
  url: string;
};

export type Response = {
  response: any;
  error?: boolean;
};

export const requestAPI = async (options: Options) => {
  try {
    const response = await API(options);

    return { error: false, response };
  } catch (error) {
    return { error: true, response: error };
  }
};
