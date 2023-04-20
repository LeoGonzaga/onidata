import Sidebar from '@components/Sidebar';
import * as SC from './styles';
import Header from '@components/Header';
import Table from '@components/Table';
import Button from '@components/Button';
import ModalCustom from '@components/ModalCustom';

export const Dashboard = (): JSX.Element => {
  const handleClick = () => {
    console.log('hehe');
  };

  return (
    <SC.Container>
      <Sidebar />
      <SC.Body>
        <Header />
        <SC.CreateItem>
          <input type="text" placeholder="Buscar produto" />
          <Button onClick={handleClick}>Criar novo produto</Button>
        </SC.CreateItem>
        <SC.Content>
          <Table />
        </SC.Content>
      </SC.Body>

      {/* <ModalCustom /> */}
    </SC.Container>
  );
};
