import Sidebar from '@components/Sidebar';
import * as SC from './styles';
import Header from '@components/Header';
import Table from '@components/Table';
import Button from '@components/Button';
import ModalCustom from '@components/ModalCustom';
import useDashboard from './useDashboard';

export const Dashboard = (): JSX.Element => {
  const { handleToggleModal, isOpen, products } = useDashboard();

  return (
    <SC.Container>
      <Sidebar />
      <SC.Body>
        <Header />
        <SC.CreateItem>
          <input type="text" placeholder="Buscar produto" />
          <Button onClick={handleToggleModal}>Criar novo produto</Button>
        </SC.CreateItem>
        <SC.Content>
          <Table data={products} />
        </SC.Content>
      </SC.Body>

      <ModalCustom isOpen={isOpen} onClose={handleToggleModal} />
    </SC.Container>
  );
};
