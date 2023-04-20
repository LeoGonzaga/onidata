import * as SC from './styles';

export const Input = (): JSX.Element => {
  return (
    <SC.StyledTextFiled
      label="Digite seu email"
      variant="outlined"
      placeholder="example@email.com"
    />
  );
};
