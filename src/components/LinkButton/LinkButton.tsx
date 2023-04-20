import { redirect } from 'react-router-dom';
import * as SC from './styles';

interface ILinkButton {
  value: string;
  text: string;
}

export const LinkButton = ({ value, text }: ILinkButton): JSX.Element => {
  return <SC.Container href={value}>{text}</SC.Container>;
};
