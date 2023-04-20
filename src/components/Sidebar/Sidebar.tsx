import { Typography } from '@mui/material';
import * as SC from './styles';

export const Sidebar = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.Logo>
        <img
          src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
          alt=""
        />
      </SC.Logo>

      <SC.Content>
        <Typography fontSize={20} fontWeight={600}>
          Produtos
        </Typography>
      </SC.Content>
    </SC.Container>
  );
};
