import Input from '@components/Input';
import * as SC from './styles';
import { TextField, Typography } from '@mui/material';
import Button from '@components/Button';
import InputMask from 'react-input-mask';
import { useState } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

const INITIAL_VALUE_ADDRESS = {
  zipcode: '',
  city: '',
  district: '',
  state: '',
  street: '',
  number: '',
  complement: '',
};

const addressSchema = {
  zipcode: yup.string().required('CEP é obrigatório'),
  city: yup.string().required('Cidade é obrigatório'),
  district: yup.string().required('Bairro é obrigatório'),
  state: yup.string().required('Estado é obrigatório'),
  street: yup.string().required('Rua é obrigatório'),
  number: yup.string(),
  complement: yup.string(),
};

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  brand: yup.string().required('Marca é obrigatória'),
});

export const CreateProduct = (): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      brand: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <SC.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography fontWeight={600}>Criação de produto</Typography>
        <Input label="o nome do produto" register={register('name')} />
        <Input label="o nome da marca" register={register('brand')} />
        {/* <Input label="a marca do produto" register={register} /> */}
        {/* <InputMask
          mask="(0)999 999 99 99"
          value={''}
          disabled={false}
          maskChar=" "
        >
          {() => (
            <>
              <TextField />
            </>
          )} */}
        {/* </InputMask> */}
        <button type="submit">aaaaaaaaaaaaaa</button>
      </form>
    </SC.Container>
  );
};
