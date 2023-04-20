import { ChangeEvent } from 'react';

const useForm = () => {
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hehe');
  };
  return { handleSubmit };
};

export default useForm;
