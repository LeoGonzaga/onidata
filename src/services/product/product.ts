import { Options, requestAPI } from '@services/api';

export const listAll = () => {
  const options: Options = {
    url: `/produto`,
    method: 'GET',
  };

  return requestAPI(options);
};

export const create = () => {
  const options: Options = {
    url: `/produto`,
    method: 'POST',
  };

  return requestAPI(options);
};
