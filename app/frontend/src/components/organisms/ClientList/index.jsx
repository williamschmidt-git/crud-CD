import React from 'react';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';

export default function ClientList({ customers }) {
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
            <Button />
            <Button />
          </tr>
        ))}
      </tbody>
    </table>
  </div>;
}
