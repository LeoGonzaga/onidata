import Input from '@components/Input';
import * as SC from './styles';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const PersonalAccount = (): JSX.Element => {
  return (
    <SC.Container>
      <Input placeholder="Nome" label="seu nome" />
      <Input placeholder="Sobrenome" label="seu sobrenome" />

      <div className="row">
        <Input placeholder="" label="" type="date" />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </div>
    </SC.Container>
  );
};
