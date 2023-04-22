import Avatar from '@components/Avatar';
import * as SC from './styles';
import Dropdown from '@components/Dropdown';

export const Header = (): JSX.Element => {
  return (
    <SC.Container>
      <Avatar name="Leo" url="" />
      <Dropdown />
    </SC.Container>
  );
};
