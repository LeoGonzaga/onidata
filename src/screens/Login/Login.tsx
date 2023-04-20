import { Button } from '@mui/material';

import Input from '@components/Input';
import * as SC from './styles';

export const Login = (): JSX.Element => {
  return (
    <SC.Container>
      <Input />
      <Input />
      <Button>Primary</Button>
    </SC.Container>
  );
};
