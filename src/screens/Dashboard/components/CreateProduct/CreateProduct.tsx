import Input from '@components/Input';
import { Typography } from '@mui/material';
import InputMask from 'react-input-mask';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Error from '@components/Error';
import * as SC from './styles';

const schema = yup.object({
  name: yup
    .string()
    .required('Nome é obrigatório')
    .matches(/^[aA-zZ\s]+$/, 'Apenas letras no nome do produto'),
  brand: yup.string().required('Marca é obrigatória'),
  price: yup.string().required('Preço é obrigatória'),
  stock: yup.string().required('Estoque é obrigatório'),
  sales: yup.string().required('Quantidade vendida é obrigatório'),
});

export const CreateProduct = (): JSX.Element => {
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
          {errors.price && <Error>{errors.price.message}</Error>}

          <div className="row">
            <div className="column">
              <InputMask
                mask={'999.999'}
                alwaysShowMask={false}
                maskPlaceholder=""
                maskChar=""
                type={'text'}
                placeholder="Quantidade em estoque"
                {...register('stock', { required: true })}
              />
              {errors.stock && <Error>{errors.stock.message}</Error>}
            </div>
            <div className="column">
              <InputMask
                mask={'999.999'}
                alwaysShowMask={false}
                maskPlaceholder=""
                maskChar=""
                type={'text'}
                placeholder="Quantidade de vendas"
                {...register('sales', { required: true })}
              />
              {errors.sales && <Error>{errors.sales.message}</Error>}
            </div>
          </div>
        </SC.ContentInputMask>
        <button type="submit">Criar</button>
      </form>
    </SC.Container>
  );
};
