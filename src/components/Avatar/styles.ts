import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${COLORS.blue};
  color: #fff;
  font-size: 30px;

  display: grid;
  align-items: center;
  text-align: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
`;
