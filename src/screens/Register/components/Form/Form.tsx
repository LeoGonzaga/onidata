import { Typography } from '@mui/material';
import * as SC from './styles';
import Input from '@components/Input';
import Button from '@components/Button';
import useForm from './useForm';
import StepperCustom from '@components/StepperCustom';
import PersonalAccount from './components/PersonalAccount';

export const Form = (): JSX.Element => {
  const { handleSubmit } = useForm();
  return (
    <SC.Container onSubmit={handleSubmit}>
      <img
        src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
        alt=""
      />
      <StepperCustom />
      <Typography fontSize={30} fontWeight={600} marginBottom={1}>
        Nos conta um pouco sobre você
      </Typography>
      <PersonalAccount />
      <Button>Primary</Button>

      <p>Criar uma conta</p>
    </SC.Container>
  );
};
