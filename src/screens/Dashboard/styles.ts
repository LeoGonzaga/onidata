import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Body = styled.div`
  width: 90%;
`;

export const Content = styled.div`
  height: 80vh;
  overflow: scroll;
`;

export const CreateItem = styled.div`
  background-color: ${COLORS.white};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  input {
    width: 60%;
    padding: 0px 10px;
    font-size: 16px;
    outline: none;
    border-radius: 6px;
    border: 1px solid #ccc;
    &:hover {
      border: 1px solid ${COLORS.blue};
    }

    &:focus {
      border: 1px solid ${COLORS.blue};
    }
  }

  button {
    width: 210px;
    color: ${COLORS.white} !important;
    background-color: ${COLORS.blue} !important;

    &:hover {
      color: ${COLORS.blue} !important;
      background-color: ${COLORS.white} !important;
    }
  }
`;
