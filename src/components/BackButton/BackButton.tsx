import { IoIosArrowBack } from 'react-icons/io';
import * as SC from './styles';

interface IBackButton {
  onClick: () => void;
}

export const BackButton = ({ onClick }: IBackButton): JSX.Element => {
  return (
    <SC.Container onClick={onClick}>
      <IoIosArrowBack size={20} />
      <span>Voltar</span>
    </SC.Container>
  );
};
