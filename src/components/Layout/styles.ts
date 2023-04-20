import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
`;

export const Background = styled.div`
  background-color: ${COLORS.blue};
`;