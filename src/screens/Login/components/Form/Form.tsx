import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import * as SC from './styles';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from './useForm';
import LinkButton from '@components/LinkButton';

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
      <Input placeholder="example@email.com" type="email" label="seu email" />
      <Input placeholder="" type="password" label="sua senha" />
      <Button>Primary</Button>

      <LinkButton text="Criar uma conta" value="/register" />
    </SC.Container>
  );
};
