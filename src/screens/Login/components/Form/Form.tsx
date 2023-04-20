import { Typography } from '@mui/material';
import * as SC from './styles';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from './useForm';

export const Form = (): JSX.Element => {
  const { handleSubmit } = useForm();
  return (
    <SC.Container onSubmit={handleSubmit}>
      <img
        src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
        alt=""
      />
      <Typography fontSize={30} fontWeight={600} marginBottom={1}>
        Bem vindo a Onidata!
      </Typography>
      <Input />
      <Input />
      <Button>Primary</Button>
    </SC.Container>
  );
};
