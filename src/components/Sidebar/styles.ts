import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  background-color: ${COLORS.blue};
  width: 300px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const Logo = styled.div`
  background-color: #174197;
  display: flex;
  justify-content: center;
  img {
    width: 100px;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding: 10px;
  color: #fff;
`;
