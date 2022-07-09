import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { findByName } from '../../http/sale';
import SaleList from '../../components/organisms/SaleList';

export default function SalesPage() {
  const [customerOrProduct, setCustomerOrProduct] = useState('Cliente');
  const [inputBox, setInputBox] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [allSales, setAllSales] = useState([]);

  const handleSelect = (e) => {
    const { value } = e.target;
    setCustomerOrProduct(value);
  };

  function searchByName(e) {
    e.preventDefault();
    if (customerOrProduct.includes('Cliente')) {
      findByName(inputBox).then((data) => setAllSales(data));
    }
    if (customerOrProduct.includes('Produto')) {
      findByName(inputBox).then((data) => setAllSales(data));
    }
  }

  const handleInput = (e) => {
    const { value, name } = e.target;
    setInputBox({
      [name]: value,
    });
  };

  const listenerCustomerOrProduct = () => {
    if (customerOrProduct.includes('Cliente')) {
      return (
        <div>
          <Input
            type="text"
            placeholder="Cliente"
            name="nome"
            onChange={ (e) => handleInput(e) }
          />
        </div>
      );
    }

    if (customerOrProduct.includes('Produto')) {
      return (
        <div>
          <Input
            type="text"
            placeholder="Produto"
            name="desc"
            onChange={ (e) => handleInput(e) }
          />
        </div>
      );
    }
  };
  return (
    <div>
      <form>
        <select onChange={ (e) => handleSelect(e) }>
          <option selected name="customer">Cliente</option>
          <option name="product">Produto</option>
        </select>
        {customerOrProduct && (listenerCustomerOrProduct())}
        <Button type="submit" text="Enviar" onClick={ (e) => searchByName(e) } />
      </form>
      <SaleList sales={ allSales } />
    </div>
  );
}
