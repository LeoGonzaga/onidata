export const setScrollBarStyled = () => {
  return `
        ::-webkit-scrollbar {
            width: 10px;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #ccc;
          border-radius: 20px;
          border: 3px solid #212121;
        }
        &:hover{
        
        ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        
        }
    }
    `;
};
