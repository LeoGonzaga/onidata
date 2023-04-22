import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  place-items: center;
  background-color: ${COLORS.blue};
  form {
    background-color: ${COLORS.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 600px;
    padding: 50px 10px;
    border-radius: 6px;
  }

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  button {
    background-color: #174197;
  }
`;
