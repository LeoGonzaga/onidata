import { Button, Typography } from '@mui/material';

import Input from '@components/Input';
import * as SC from './styles';
import Layout from '@components/Layout';

export const Login = (): JSX.Element => {
  return (
    <Layout>
      <SC.Container>
        <form action="">
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
        </form>
      </SC.Container>
    </Layout>
  );
};
