import React from 'react';
import * as SC from './styles';

interface IButton {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: IButton): JSX.Element => {
  return (
    <SC.StyledButton type="submit" onClick={onClick}>
      {children}
    </SC.StyledButton>
  );
};
