import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import Label from '../../components/atoms/Label';
import Input from '../../components/atoms/Input';
import Button from '../../components/atoms/Button';
import DialogBox from '../../components/molecules/DialogBox/DialogBox';
import ApplicationContext from '../../context/ApplicationContext';
import ProductList from '../../components/organisms/ProductList';
import { findByName, deleteProduct } from '../../http/produto';

export default function ProductPage() {
  const navigate = useNavigate();
  const [inputProduct, setName] = useState('');
  const [dialog, setDialog] = useState({
    message: '',
    isLoading: false,
  });
  const { allProducts, setAllProducts } = useContext(ApplicationContext);

  const idClienteRef = useRef();

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
    idClienteRef.current = id;
  };

  function redirectToForm() {
    navigate('/products/create');
  }

  const confirmDelete = (choose) => {
    if (choose) {
      setAllProducts(allProducts.filter((p) => p.idProduto !== idClienteRef.current));
      handleDialog('', false);
      deleteProduct(idClienteRef.current);
    } else {
      handleDialog('', false);
    }
  };

  function searchByName() {
    findByName(inputProduct.productName).then((data) => setAllProducts(data));
  }

  return (
    <div>
      <Label htmlFor="productName">
        Insira o nome
        <Input
          id="productName"
          type="text"
          name="productName"
          onChange={ (e) => handleInput(e) }
          placeholder="Produto"
        />
        <Button text="Enviar" onClick={ () => searchByName() } />
      </Label>

      <div>
        <Button text="Criar novo Produto" onClick={ () => redirectToForm() } />
      </div>

      <ProductList products={ allProducts } handleDelete={ handleDelete } />
      {dialog.isLoading && (
        <DialogBox
          onDialog={ confirmDelete }
          message={ dialog.message }
        />)}
    </div>
  );
}
