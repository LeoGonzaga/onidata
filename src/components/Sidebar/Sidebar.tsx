import * as SC from './styles';

export const Sidebar = (): JSX.Element => {
  return (
    <SC.Container>
      <SC.Logo>
        <img
          src="https://avatars.githubusercontent.com/u/12630440?s=280&v=4"
          alt=""
        />
      </SC.Logo>

      <SC.Content></SC.Content>
    </SC.Container>
  );
};
