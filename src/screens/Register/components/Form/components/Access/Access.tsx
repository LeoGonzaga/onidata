import Input from '@components/Input';
import * as SC from './styles';

export const Access = ({ register }: any): JSX.Element => {
  return (
    <SC.Container>
      <Input
        placeholder="Email"
        label="seu email"
        register={register('email')}
      />
      <Input
        placeholder="Senha"
        label="sua senha"
        type="password"
        register={register('paswword')}
      />
    </SC.Container>
  );
};
