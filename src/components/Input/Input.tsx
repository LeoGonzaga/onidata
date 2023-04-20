import * as SC from './styles';

interface IInput {
  placeholder?: string;
  type?: string;
  label: string;
}

export const Input = ({ type, placeholder, label }: IInput): JSX.Element => {
  return (
    <SC.StyledTextFiled
      label={label && `Digite ${label}`}
      variant="outlined"
      placeholder={placeholder}
      type={type}
    />
  );
};
