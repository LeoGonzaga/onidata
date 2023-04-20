import { Typography } from '@mui/material';

import * as SC from './styles';
import Layout from '@components/Layout';
import Form from './components/Form';

export const Login = (): JSX.Element => {
  return (
    <Layout>
      <SC.Container>
        <Form />
      </SC.Container>
    </Layout>
  );
};
