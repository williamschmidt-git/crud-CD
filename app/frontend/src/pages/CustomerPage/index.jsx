import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import Button from '../../components/atoms/Button';
import ClientList from '../../components/organisms/ClientList';
import { findByName } from '../../http/cliente';
// import CentralizeTemplate from '../../templates/CentralizeTemplate';

export default function CustomerPage() {
  const navigate = useNavigate();
  const [inputName, setName] = useState('');
  const [allCustomers, setAllCustomers] = useState([]);

  // useEffect(() => {
  //   findByName(inputName).then((data) => setAllCustomers(data));
  // }, [inputName]);

  function handleInput(e) {
    const { value, name } = e.target;
    setName({
      [name]: value,
    });
  }

  function redirectToForm() {
    navigate('/customers/create');
  }

  function searchByName() {
    findByName(inputName.inputName).then((data) => setAllCustomers(data));
  }

  return (
    <div>
      <Label htmlFor="inputName">
        Insira o nome
        <Input
          id="inputName"
          type="text"
          name="inputName"
          onChange={ (e) => handleInput(e) }
          placeholder="Fulana da Silva"
        />
        <Button text="Enviar" onClick={ () => searchByName() } />
      </Label>

      <div>
        <Button text="Criar novo usuário" onClick={ () => redirectToForm() } />
      </div>

      <ClientList customers={ allCustomers } />
    </div>
  );
}
