import React from 'react';
import * as SC from './styles';

interface ICenter {
  children: React.ReactNode;
}

export const Center = ({ children }: ICenter): JSX.Element => {
  return <SC.Container>{children}</SC.Container>;
};
