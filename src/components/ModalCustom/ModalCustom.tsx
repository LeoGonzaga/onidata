import Modal from 'react-modal';
import * as SC from './styles';
import BackButton from '@components/BackButton';

interface IModalCustom {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCustom = ({ isOpen, onClose }: IModalCustom): JSX.Element => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      className="modalOverlay"
      ariaHideApp={false}
    >
      <SC.Container>
        <BackButton onClick={onClose} />
      </SC.Container>
    </Modal>
  );
};
