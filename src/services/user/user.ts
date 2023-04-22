import { Options, requestAPI } from '@services/api';

export const create = () => {
  const options: Options = {
    url: `/user`,
    method: 'POST',
  };

  return requestAPI(options);
};
