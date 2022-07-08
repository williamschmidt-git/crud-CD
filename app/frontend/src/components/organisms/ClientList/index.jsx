import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';

export default function ClientList({ customers }) {
  console.log(customers);
  return (
    customers.length > 0 ? (
      <div>
        <table>
          <thead>
            <tr>
              <th>Clientes</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((e, index) => (
              <tr key={ index }>
                <td>
                  <TextTitle>
                    {e.nmCliente}
                  </TextTitle>
                </td>
                <Button text="Editar" />
                <Button text="Excluir" />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (<>Clientes:</>)
  );
}

ClientList.propTypes = {
  customers: PropTypes.node.isRequired,
};
