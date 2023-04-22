import { services } from '@services/index';
import React from 'react';

const CreateProduct = () => {
  const handleCreateProduct = async () => {
    const response = await services.product.create();
    console.log(response);
  };
  return {};
};

export default CreateProduct;
