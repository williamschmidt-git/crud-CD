import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { createProduct } from '../../http/produto';
import RedirectToMainPage from '../../components/molecules/RedirectToMainPage';

export default function CreateProductsPage() {
  const [newProduct, setNewProduct] = useState({
    dscProduto: '',
    vlrUnitario: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct(newProduct);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="input-name">
            Insira a descrição do Produto:
            <Input
              type="text"
              name="dscProduto"
              id="input-desc"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="input-vlr">
            Insira o valor:
            <Input
              type="text"
              name="vlrUnitario"
              id="input-vlr"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </div>
        <Button type="submit" text="Enviar" />
      </form>
      <RedirectToMainPage />

    </div>
  );
}
