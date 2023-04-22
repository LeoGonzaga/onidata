import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const schema = yup.object({
  email: yup.string().required('Nome é obrigatório').email(),
  password: yup.string().required('Senha é obrigatória'),
});

const useFormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return { handleSubmit, onSubmit, register, errors };
};

export default useFormLogin;
