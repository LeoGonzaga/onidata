import Input from '@components/Input';
import * as SC from './styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import ReactInputMask from 'react-input-mask';

export const PersonalAccount = ({ register }: any): JSX.Element => {
  return (
    <SC.Container>
      <Input placeholder="Nome" label="seu nome" register={register('name')} />
      <Input
        placeholder="Sobrenome"
        label="seu sobrenome"
        register={register('lastname')}
      />
      <ReactInputMask
        mask={'999.999,99'}
        alwaysShowMask={false}
        maskPlaceholder=""
        maskChar=""
        type={'text'}
        placeholder="CPF"
        {...register('cpf', { required: true })}
      />
      {/* {errors.price && <Error>{errors.price.message}</Error>} */}
      <div className="row">
        <Input
          placeholder=""
          label=""
          type="date"
          register={register('birthday')}
        />
        <FormControl className="select">
          <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            {...register('gender', { required: true })}
          >
            <MenuItem value={'Masculino'}>Masculino</MenuItem>
            <MenuItem value={'Feminino'}>Feminino</MenuItem>
            <MenuItem value={'Outro'}>Outro</MenuItem>
          </Select>
        </FormControl>
      </div>
    </SC.Container>
  );
};
