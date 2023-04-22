import * as SC from './styles';

interface IAvatar {
  url?: string;
  name?: string;
}

const DEFAULT_IMAGE =
  'https://uploads.codesandbox.io/uploads/user/6f779f4e-eb48-4c23-8ce7-03bf49d1cab8/3WU1-404.png';

export const Avatar = ({ name, url }: IAvatar): JSX.Element => {
  const INITAL = name?.charAt(0);
  return (
    <SC.Container>
      {url ? (
        <img
          src={url}
          onError={({ currentTarget }) => (currentTarget.src = DEFAULT_IMAGE)}
        />
      ) : (
        INITAL
      )}
    </SC.Container>
  );
};
