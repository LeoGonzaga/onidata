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
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;

  input {
    width: 60%;
    padding: 0px 10px;
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
