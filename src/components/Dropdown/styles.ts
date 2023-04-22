import styled from 'styled-components';

export const Container = styled.div`
  width: 50px;

  div {
    background-color: #fff;
    width: 70px;
    height: 30px;
    padding: 0px 5px;
    position: absolute;
    display: flex;
    align-items: center;
    text-align: start;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    cursor: pointer;
  }

  button {
    width: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
