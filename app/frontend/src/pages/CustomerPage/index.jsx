import React, { useState, useContext, useRef } from 'react';
import { useNavigate } from 'react-router';
import Input from '../../components/atoms/Input';
import Label from '../../components/atoms/Label';
import Button from '../../components/atoms/Button';
import ClientList from '../../components/organisms/ClientList';
import { findByName, deleteCustomer } from '../../http/cliente';
import ApplicationContext from '../../context/ApplicationContext';
import DialogBox from '../../components/molecules/DialogBox/DialogBox';
import RedirectToMainPage from '../../components/molecules/RedirectToMainPage';

export default function CustomerPage() {
  const navigate = useNavigate();
  const [inputName, setName] = useState('');
  const [dialog, setDialog] = useState({
    message: '',
    isLoading: false,
  });
  const { allCustomers, setAllCustomers } = useContext(ApplicationContext);

  const idProductRef = useRef();

  function handleInput(e) {
    const { value, name } = e.target;
    setName({
      [name]: value,
    });
  }

  const handleDialog = (message, isLoading) => {
    setDialog({
      message,
      isLoading,
    });
  };

  const handleDelete = (id) => {
    handleDialog('Você tem certeza que quer deletar este registro?', true);
    idProductRef.current = id;
  };

  const confirmDelete = (choose) => {
    if (choose) {
      setAllCustomers(allCustomers.filter((p) => p.idCliente !== idProductRef.current));
      handleDialog('', false);
      deleteCustomer(idProductRef.current);
    } else {
      handleDialog('', false);
    }
  };

  function redirectToForm() {
    navigate('/customers/create');
  }

  function searchByName() {
    findByName(inputName.inputName).then((data) => setAllCustomers(data));
    console.log(allCustomers);
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

      <ClientList customers={ allCustomers } handleDelete={ handleDelete } />
      {dialog.isLoading && (
        <DialogBox
          onDialog={ confirmDelete }
          message={ dialog.message }
        />)}
      <RedirectToMainPage />
    </div>
  );
}
