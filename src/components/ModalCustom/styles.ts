import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  background-color: ${COLORS.white};
  border-radius: 6px;
  padding: 20px;
  color: #000;

  button {
    color: ${COLORS.blue} !important;
  }
`;
