import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const Container = styled.div`
  p {
    margin-bottom: 10px;
  }

  form {
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    border: none;
    background-color: ${COLORS.blue};
    color: ${COLORS.white} !important;
    padding: 20px;
    width: 80%;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s ease-out;
    &:hover {
      filter: brightness(0.7);
    }
  }
`;

export const ContentInputMask = styled.div`
  width: 80%;

  input {
    background-color: ${COLORS.white};
    width: 100%;
    margin: 5px 0px !important;
    padding: 16.5px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: ${COLORS.blue};
    }
  }

  .row {
    width: 100%;
  }
`;
