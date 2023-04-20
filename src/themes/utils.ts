import { COLORS } from '../constants/colors';

export const setScrollBarStyled = () => {
  return `
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: ${COLORS.blue};
          border-radius: 20px;
          border: 3px solid ${COLORS.white};
        }
        &:hover{
        
        ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        
        }
    }
    `;
};
