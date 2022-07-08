import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';

export default function ClientList({ customers, handleDelete }) {
  const navigate = useNavigate();

  function handleEditButton() {
    navigate('/customers/edit');
  }
  return (
    customers.length > 0 ? (
      <div>
        <table>
          <thead>
            <tr>
              <th>Clientes</th>
              <th>Cidade</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((e, index) => (
              <tr key={ index }>
                <td>
                  <TextTitle>
                    { e.nmCliente }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { e.cidade }
                  </TextTitle>
                </td>
                <Button text="Editar" onClick={ () => handleEditButton() } />
                <Button text="Excluir" onClick={ () => handleDelete(e.idCliente) } />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (<h3>Clientes</h3>)
  );
}

ClientList.propTypes = {
  customers: PropTypes.node.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
