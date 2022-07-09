import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/atoms/Input';
import ApplicationContext from '../../context/ApplicationContext';
import Button from '../../components/atoms/Button';
import { updateProduct } from '../../http/produto';
import RedirectToMainPage from '../../components/molecules/RedirectToMainPage';

export default function EditSalePage() {
  const { allSales } = useContext(ApplicationContext);
  const [editedProduct, setEditedProduct] = useState({
    dscProduto: '',
    vlrUnitario: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: value,
    });
  };

  const handleClick = (id) => {
    console.log(id);
    updateProduct(id, editedProduct);
  };

  const redirectPreviousPage = () => {
    navigate('/products');
  };

  return (
    <div>
      {allProducts && (
        <div>
          { allProducts.map((product, index) => (
            <div key={ index }>
              <Input
                type="text"
                placeholder={ product.dscProduto }
                name="dscProduto"
                onChange={ (e) => handleChange(e) }
              />
              <Input
                type="text"
                placeholder={ product.vlrUnitario }
                name="vlrUnitario"
                onChange={ (e) => handleChange(e) }
              />
              <Button text="Send" onClick={ () => handleClick(product.idProduto) } />
            </div>
          ))}
        </div>
      )}
      <Button text="Previous Page" onClick={ redirectPreviousPage } />
      <RedirectToMainPage />
    </div>
  );
}
