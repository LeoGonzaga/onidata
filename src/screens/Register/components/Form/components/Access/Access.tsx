import Input from '@components/Input';
import * as SC from './styles';

export const Access = (): JSX.Element => {
  return (
    <SC.Container>
      <Input placeholder="Email" label="seu email" />
      <Input placeholder="Senha" label="sua senha" type="password" />
    </SC.Container>
  );
};
