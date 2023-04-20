import Input from '@components/Input';
import * as SC from './styles';

export const Address = (): JSX.Element => {
  return (
    <SC.Container>
      <Input placeholder="CEP" label="seu CEP" />
      <Input placeholder="Cidade" label="sua cidade" />

      <Input placeholder="Estado" label="seu bairro" />
      <Input placeholder="Logradouro" label="sua cidade" />

      <div className="row">
        <Input placeholder="Bairro" label="seu CEP" />
        <Input placeholder="Complemento" label="seu sobrenome" />
      </div>
    </SC.Container>
  );
};
