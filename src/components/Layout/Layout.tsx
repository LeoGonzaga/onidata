import React from 'react';
import * as SC from './styles';

interface ILayout {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayout): JSX.Element => {
  return <SC.Container>{children}</SC.Container>;
};
