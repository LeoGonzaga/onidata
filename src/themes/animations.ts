import { keyframes } from 'styled-components';

export const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const ScaleAnimation = keyframes`  
  from {transform: scaleY(1); }
  to { transform: scaleY(1.1); }
`;

export const LeftToRightAnimtion = keyframes`  
  from {transform: translateX(-100px); }
  to { transform:translateX(0px);  }
`;

export const RotateAnimation = keyframes`  
   0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
