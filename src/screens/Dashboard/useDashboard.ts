import { useEffect, useState } from 'react';
import { IProducts } from '../../@types/products';
import { services } from '@services/index';
import { Response } from '@services/api';

const useDashboard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [products, setProducts] = useState<Array<IProducts>>([]);

  function createData(
    avatar: string,
    name: string,
    price: number,
    brand: string,
    stock: number,
    sales: number
  ) {
    return { name, avatar, price, brand, stock, sales };
  }

  const getAllProducts = async () => {
    const { response, error }: Response = await services.product.listAll();
    const items = response.data;
    const formatedItemsToTable = items.map((elem: IProducts) => {
      return createData(
        elem.avatar,
        elem.nome,
        elem.preco,
        elem.marca,
        elem.qt_estoque,
        elem.qt_vendas
      );
    });
    setProducts(formatedItemsToTable);
    console.log(formatedItemsToTable);
  };

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return { isOpen, handleToggleModal, products };
};

export default useDashboard;
