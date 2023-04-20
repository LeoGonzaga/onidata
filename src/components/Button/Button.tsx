import React from 'react';
import * as SC from './styles';

interface IButton {
  children: React.ReactNode;
}

export const Button = ({ children }: IButton): JSX.Element => {
  return <SC.StyledButton type="submit">{children}</SC.StyledButton>;
};
