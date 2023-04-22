import { Typography } from '@mui/material';
import * as SC from './styles';
import Error from '@components/Error';

interface IInput {
  placeholder?: string;
  type?: string;
  label: string;
  register?: any;
  error?: any;
}

export const Input = ({
  type,
  placeholder,
  label,
  register,
  error,
}: IInput): JSX.Element => {
  return (
    <>
      <SC.StyledTextFiled
        label={label && `Digite ${label}`}
        variant="outlined"
        placeholder={placeholder}
        type={type}
        error={!!error?.message}
        {...register}
      />
      <Error>{error?.message}</Error>
    </>
  );
};
