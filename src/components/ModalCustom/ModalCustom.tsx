import Modal from 'react-modal';
import * as SC from './styles';
import BackButton from '@components/BackButton';
import CreateProduct from '@screens/Dashboard/components/CreateProduct';

interface IModalCustom {
  isOpen: boolean;
  onClose: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const ModalCustom = ({ isOpen, onClose }: IModalCustom): JSX.Element => {
  const TYPE = {
    edit: <></>,
    create: <></>,
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <SC.Container>
        <BackButton onClick={onClose} />
        <CreateProduct />
      </SC.Container>
    </Modal>
  );
};
