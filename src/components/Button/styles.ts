import { Button } from '@mui/material';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledButton = styled(Button)`
  padding: 20px !important;
  border-radius: 6px;
  width: 80%;
  color: #fff !important;
  border: 1px solid ${COLORS.blue} !important;
  &:hover {
    color: ${COLORS.blue} !important;
    border: 1px solid ${COLORS.blue} !important;
  }
`;
