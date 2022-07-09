import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';

export default function ProductList({ products, handleDelete }) {
  const navigate = useNavigate();

  function handleEditButton() {
    navigate('/products/edit');
  }
  return (
    products.length > 0 ? (
      <div>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Valor unitário</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e, index) => (
              <tr key={ index }>
                <td>
                  <TextTitle>
                    { e.dscProduto }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { e.vlrUnitario }
                  </TextTitle>
                </td>
                <Button text="Editar" onClick={ () => handleEditButton() } />
                <Button text="Excluir" onClick={ () => handleDelete(e.idProduto) } />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (<h3>Produtos</h3>)
  );
}

ProductList.propTypes = {
  products: PropTypes.node.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
