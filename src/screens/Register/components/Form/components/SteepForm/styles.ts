import styled from 'styled-components';

export const Container = styled.form`
  .column {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 3px 0px 0px 0px;
  }
`;

export const Flex = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  input {
    all: initial;
    height: 50px;
  }
`;
