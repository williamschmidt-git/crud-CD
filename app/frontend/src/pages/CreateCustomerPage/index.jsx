import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import { createCustomer } from '../../http/cliente';
import RedirectToMainPage from '../../components/molecules/RedirectToMainPage';

export default function CreateCustomerPage() {
  const [newCustomer, setNewCustomer] = useState({
    nmCliente: '',
    cidade: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createCustomer(newCustomer);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setNewCustomer({
      ...newCustomer,
      [name]: value,
    });
  };

  console.log(newCustomer);

  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="input-name">
            Insira o nome:
            <Input
              type="text"
              name="nmCliente"
              id="input-name"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </div>
        <div>
          <label htmlFor="input-city">
            Insira a cidade:
            <Input
              type="text"
              name="cidade"
              id="input-city"
              onChange={ (e) => handleChange(e) }
            />
          </label>
        </div>
        <Button type="submit" text="Send" />
      </form>
      <RedirectToMainPage />

    </div>
  );
}
