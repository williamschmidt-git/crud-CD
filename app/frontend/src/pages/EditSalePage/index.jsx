import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/atoms/Input';
import ApplicationContext from '../../context/ApplicationContext';
import Button from '../../components/atoms/Button';
import { updateSale } from '../../http/sale';
import RedirectToMainPage from '../../components/molecules/RedirectToMainPage';

export default function EditSalePage() {
  const { allSales } = useContext(ApplicationContext);
  const [editedSale, setEditedSale] = useState({
    nmCliente: '',
    dscProduto: '',
    vlrUnitario: 0,
    qtdVenda: 0,
  });
  console.log(editedSale);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditedSale({
      ...editedSale,
      [name]: value,
    });
  };

  const handleClick = (id) => {
    updateSale(id, editedSale);
  };

  const redirectPreviousPage = () => {
    navigate('/sales');
  };

  return (
    <div>
      {allSales && (
        <div>
          { allSales.map((sale, index) => (
            <div key={ index }>
              <Input
                type="text"
                placeholder={ sale.cliente.nmCliente }
                name="nmCliente"
                onChange={ (e) => handleChange(e) }
              />
              <Input
                type="text"
                placeholder={ sale.produto.dscProduto }
                name="dscProduto"
                onChange={ (e) => handleChange(e) }
              />
              <Input
                type="text"
                placeholder={ sale.produto.vlrUnitario }
                name="vlrUnitario"
                onChange={ (e) => handleChange(e) }
              />
              <Input
                type="text"
                placeholder={ sale.qtdVenda }
                name="qtdVenda"
                onChange={ (e) => handleChange(e) }
              />
              <Button text="Enviar" onClick={ () => handleClick(sale.idProduto) } />
            </div>
          ))}
        </div>
      )}
      <Button text="Página anterior" onClick={ redirectPreviousPage } />
      <RedirectToMainPage />
    </div>
  );
}
