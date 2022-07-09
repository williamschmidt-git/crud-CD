/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';
import { findSale } from '../../../http/sale';
// import { findById } from '../../../http/produto';
// import { findById } from '../../../http/produto';

export default function SaleList({ sales, handleDelete }) {
  const [allSales, setAllSales] = useState([]);
  // console.log(setAllSales);

  const getSaleData = useCallback(async (id) => {
    await findSale(id).then((data) => {
      setAllSales(data[0]);
      console.log(data[0]);
    });
  }, []);

  const loop = () => sales.map((e) => getSaleData(e.idVenda));

  useEffect(() => {
    setAllSales(loop());

    // getSaleData(1).then((data) => setAllSales(...data));
  }, []);

  console.log(allSales);

  return (
    sales.length > 0 ? (
      <div>
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Produto</th>
              <th>Quantidade</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {sales.map((sale, index) => (
              <tr key={ index }>
                <td>
                  <TextTitle>
                    { sale.cliente.nmCliente }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { sale.cidade }
                  </TextTitle>
                </td>
                <Button text="Editar" onClick={ () => handleEditButton() } />
                <Button text="Excluir" onClick={ () => handleDelete(sale.idVenda) } />
              </tr>
            ))}
          </tbody>
        </table>
        {/* {getProductByid(1)} */}
      </div>
    ) : (<h3>Vendas</h3>)
  );
}

SaleList.propTypes = {
  sales: PropTypes.node.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
