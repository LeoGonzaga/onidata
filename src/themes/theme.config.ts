import { createGlobalStyle } from 'styled-components';

import { setScrollBarStyled } from './utils';

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}
body, button,input {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-style: normal;
  overflow-y: hidden;
  overflow-x: hidden;
}
body{
  font-family: 'Roboto', sans-serif;
  p {
    margin: unset;
  }
  hr {
    margin-bottom: 0;
  }
}
input, textarea, button {
  font-family: 'Montserrat', sans-serif;
}
${setScrollBarStyled()}


.row {
    display: flex;
    width: 80%;
    gap: 10px;
  }

`;
