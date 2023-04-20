import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${COLORS.blue};
  color: #fff;
  font-size: 30px;

  display: grid;
  align-items: center;
  text-align: center;
`;
