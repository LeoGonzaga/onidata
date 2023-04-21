import { TextField } from '@mui/material';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledTextFiled = styled(TextField)`
  background-color: ${COLORS.white};
  width: 80%;
  margin: 5px 0px !important;
`;

export const Error = styled.p`
  color: red;
  font-size: 13px;
  width: 80%;
`;
