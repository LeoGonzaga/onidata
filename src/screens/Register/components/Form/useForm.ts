import { ChangeEvent } from 'react';

const useFormRegister = () => {
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('hehe');
  };
  return { handleSubmit };
};

export default useFormRegister;
