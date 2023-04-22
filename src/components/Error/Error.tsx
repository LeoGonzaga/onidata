import React from 'react';
import * as SC from './styles';

interface IError {
  children: React.ReactNode;
}

export const Error = ({ children }: IError): JSX.Element => {
  return <SC.Container>{children}</SC.Container>;
};
