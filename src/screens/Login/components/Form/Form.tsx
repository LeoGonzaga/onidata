import { Typography } from '@mui/material';
import * as SC from './styles';
import Input from '@components/Input';
import Button from '@components/Button';
import LinkButton from '@components/LinkButton';
import useFormLogin from './useForm';

export const Form = (): JSX.Element => {
  const { handleSubmit, onSubmit, register, errors } = useFormLogin();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <img
        src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
        alt=""
      />
      <Typography fontSize={30} fontWeight={600} marginBottom={1}>
        Bem vindo a Onidata!
      </Typography>
      <Input
        placeholder="example@email.com"
        type="email"
        label="seu email"
        register={register('email')}
        error={errors.email}
      />
      <Input
        placeholder=""
        type="password"
        label="sua senha"
        register={register('password')}
        error={errors.password}
      />
      <Button>Primary</Button>

      <LinkButton text="Criar uma conta" value="/register" />
    </form>
  );
};
