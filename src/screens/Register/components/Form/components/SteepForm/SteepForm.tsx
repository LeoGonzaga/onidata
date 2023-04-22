import * as SC from './styles';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Input from '@components/Input';
import ReactInputMask from 'react-input-mask';
import Button from '@components/Button';
import Error from '@components/Error';
import { useState } from 'react';
import { services } from '@services/index';

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  lastname: yup.string().required('Senha é obrigatória'),
  birthday: yup.string().required('Nome é obrigatório'),
  cpf: yup.string().required('Nome é obrigatório'),
  gender: yup.string().required('Senha é obrigatória'),
  email: yup.string().required('Senha é obrigatória').email(),
  password: yup.string().required('Senha é obrigatória'),
  cep: yup.string().required('Senha é obrigatória'),
  city: yup.string().required('Senha é obrigatória'),
  state: yup.string().required('Senha é obrigatória'),
  publicPlace: yup.string().required('Senha é obrigatória'),
  neighborhood: yup.string().required('Senha é obrigatória'),
  complement: yup.string().required('Senha é obrigatória'),
});

export const SteepForm = ({ index }: any): JSX.Element => {
  const [cep, setCep] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      lastname: '',
      birthday: '',
      gender: '',
      cpf: '',
      email: '',
      password: '',
      cep: '',
      city: '',
      state: '',
      publicPlace: '',
      neighborhood: '',
      complement: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  const handleGetInfoBYCEP = async () => {
    console.log('Log');
    const res = await services.viacep.getInfo('37520-000');
    console.log(res);
  };

  return (
    <SC.Container onSubmit={handleSubmit(onSubmit)}>
      <button
        onClick={() => {
          setValue('name', 'firstName', {
            shouldValidate: true,
            shouldDirty: true,
          });
        }}
      >
        aaaaaaa
      </button>
      {index === 0 && (
        <>
          <Input
            placeholder="Nome"
            label="seu nome"
            register={register('name')}
            error={errors.name}
          />
          <Input
            placeholder="Sobrenome"
            label="seu sobrenome"
            register={register('lastname')}
            error={errors.name}
          />
          <ReactInputMask
            mask={'999.999.999-99'}
            alwaysShowMask={false}
            maskPlaceholder=""
            maskChar=""
            type={'text'}
            placeholder="CPF"
            {...register('cpf', { required: true })}
          />
          {errors.cpf && <Error>{errors.cpf.message}</Error>}
          <SC.Flex>
            <div className="column">
              <input
                placeholder=""
                type="date"
                className="date"
                {...register('birthday')}
              />
              {errors.birthday && <Error>{errors.birthday.message}</Error>}
            </div>

            <div className="column">
              <select id="" className="input" {...register('gender')}>
                <option value="M">Masculino</option>
                <option value="F">Feminino</option>
                <option value="Outro">Outro</option>
              </select>
              {errors.cpf && <Error>{errors.cpf.message}</Error>}
            </div>
          </SC.Flex>
        </>
      )}

      {index === 1 && (
        <>
          <Input
            placeholder="Email"
            label="seu email"
            register={register('email')}
          />
          <Input
            placeholder="Senha"
            label="sua senha"
            type="password"
            register={register('password')}
          />
        </>
      )}

      {index == 2 && (
        <>
          <Input
            placeholder="CEP"
            label="seu CEP"
            register={register('cep')}
            onChange={handleGetInfoBYCEP}
          />
          <Input
            placeholder="Cidade"
            label="sua cidade"
            register={register('city')}
          />

          <Input
            placeholder="Estado"
            label="seu estado"
            register={register('state')}
          />
          <Input
            placeholder="Logradouro"
            label="sua logradouro"
            register={register('publicPlace')}
          />
          <Input
            placeholder="Bairro"
            label="seu bairro"
            register={register('neighborhood')}
          />
          <Input
            placeholder="Complemento"
            label="seu complemento"
            register={register('complement')}
          />
          <Button>Criar</Button>
        </>
      )}
    </SC.Container>
  );
};
