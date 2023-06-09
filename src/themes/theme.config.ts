import { createGlobalStyle } from 'styled-components';

import { setScrollBarStyled } from './utils';
import { COLORS } from '../constants/colors';

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

  .modalOverlay {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.ReactModal__Overlay {
  background: rgba(62, 65, 87, 0.7) !important;

}

input {
    background-color: ${COLORS.white};
    width: 80%;
    padding: 16.5px 14px;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: ${COLORS.blue};
    }
  }

`;
