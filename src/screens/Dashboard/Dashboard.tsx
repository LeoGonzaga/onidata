import Sidebar from '@components/Sidebar';
import * as SC from './styles';
import Header from '@components/Header';
import Table from '@components/Table';
import Button from '@components/Button';
import ModalCustom from '@components/ModalCustom';

export const Dashboard = (): JSX.Element => {
  return (
    <SC.Container>
      <Sidebar />
      <SC.Body>
        <Header />
        <SC.Content>
          <SC.CreateItem>
            <input type="text" placeholder="Buscar produto" />
            <Button>Criar novo produto</Button>
          </SC.CreateItem>
          <Table />
        </SC.Content>
      </SC.Body>

      {/* <ModalCustom /> */}
    </SC.Container>
  );
};
