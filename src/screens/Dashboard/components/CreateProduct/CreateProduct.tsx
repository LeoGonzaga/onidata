import Input from '@components/Input';
import * as SC from './styles';
import { TextField, TextFieldProps, Typography } from '@mui/material';
import InputMask, { Props } from 'react-input-mask';
import { ReactElement, useState } from 'react';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  Controller,
} from 'react-hook-form';
import Button from '@components/Button';

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
  price: yup.string().required('Preço é obrigatória'),
  stock: yup.string().required('Estoque é obrigatório'),
  sales: yup.string().required('Quantidade vendida é obrigatório'),
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
      price: '',
      stock: '',
      sales: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(JSON.stringify(data, null, 2));
  };

  console.log(errors);

  return (
    <SC.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography fontWeight={600}>Criação de produto</Typography>
        <Input
          label="o nome do produto"
          register={register('name')}
          error={errors.name}
        />
        <Input
          label="o nome da marca"
          register={register('brand')}
          error={errors.brand}
        />
        <SC.ContentInputMask>
          <InputMask
            mask={'R$ 999.999,99'}
            alwaysShowMask={false}
            maskPlaceholder=""
            maskChar=""
            type={'text'}
            placeholder="Preço"
            {...register('price', { required: true })}
          />
          <div className="row">
            <InputMask
              mask={'999.999'}
              alwaysShowMask={false}
              maskPlaceholder=""
              maskChar=""
              type={'text'}
              placeholder="Quantidade em estoque"
              {...register('stock', { required: true })}
            />

            <InputMask
              mask={'999.999'}
              alwaysShowMask={false}
              maskPlaceholder=""
              maskChar=""
              type={'text'}
              placeholder="Quantidade de vendas"
              {...register('sales', { required: true })}
            />
          </div>
        </SC.ContentInputMask>
        <button type="submit">Criar</button>
      </form>
    </SC.Container>
  );
};
