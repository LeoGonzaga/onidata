import * as SC from './styles';

interface IInput {
  placeholder?: string;
  type?: string;
  label: string;
  register?: any;
}

export const Input = ({
  type,
  placeholder,
  label,
  register,
}: IInput): JSX.Element => {
  return (
    <SC.StyledTextFiled
      label={label && `Digite ${label}`}
      variant="outlined"
      placeholder={placeholder}
      type={type}
      {...register}
    />
  );
};
