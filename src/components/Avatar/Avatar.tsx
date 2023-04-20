import * as SC from './styles';

interface IAvatar {
  url?: string;
  name?: string;
}

export const Avatar = ({ name, url }: IAvatar): JSX.Element => {
  const INITAL = name?.charAt(0);
  return <SC.Container>{url ? <img src={url} /> : INITAL}</SC.Container>;
};
