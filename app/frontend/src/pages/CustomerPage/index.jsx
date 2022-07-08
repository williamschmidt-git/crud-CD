import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import Button from '../../components/atoms/Button';
import ClientList from '../../components/organisms/ClientList';
// import CentralizeTemplate from '../../templates/CentralizeTemplate';

export default function CustomerPage() {
  const navigate = useNavigate();
  const [inputName, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const SIX = 6;

  function handleDisabled() {
    if (inputName.inputName.length > SIX) {
      setIsDisabled(false);
    }
  }

  function handleInput(e) {
    const { value, name } = e.target;
    setName({
      [name]: value,
    });

    handleDisabled();
  }

  function redirectToForm() {
    navigate('/customers/create');
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
        <Button disabled={ isDisabled } text="Enviar" />
      </Label>

      <div>
        <Button text="Criar novo usuário" onClick={ () => redirectToForm() } />
      </div>

      <ClientList />
    </div>
  );
}
