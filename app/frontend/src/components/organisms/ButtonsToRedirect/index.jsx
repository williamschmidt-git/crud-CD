import React from 'react';
import { useNavigate } from 'react-router';
import Button from '../../atoms/Button';

export default function ButtonsToRedirect() {
  const navigate = useNavigate();

  function redirectToCustomer() {
    navigate('/customers');
  }

  function redirectToProducts() {
    navigate('/products');
  }

  function redirectToSales() {
    navigate('/sales');
  }

  return (
    <div>
      <Button text="Clientes" onClick={ () => redirectToCustomer() } />
      <Button text="Produtos" onClick={ () => redirectToProducts() } />
      <Button text="Vendas" onClick={ () => redirectToSales() } />
    </div>
  );
}
