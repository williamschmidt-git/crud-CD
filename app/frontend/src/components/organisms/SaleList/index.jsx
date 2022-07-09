/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';
import { findAllSales, findSale } from '../../../http/sale';
// import { findById } from '../../../http/produto';
// import { findById } from '../../../http/produto';

export default function SaleList({ sales, handleDelete }) {
  const [allSales, setAllSales] = useState();

  const newSales = async () => {
    setAllSales(await findAllSales(1));
  };

  useEffect(() => {
    newSales();
  }, []);

  function manipulateDateString(string) {
    const newString = string.split('T');
    console.log(newString);
    return newString[0];
  }

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
            {allSales.map((sale, index) => (
              <tr key={ index }>
                <td>
                  <TextTitle>
                    { sale.cliente.nmCliente }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { sale.produto.dscProdut }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { sale.qtdVenda }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { sale.vlrUnitarioVenda }
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { manipulateDateString(sale.dthVenda)}
                  </TextTitle>
                </td>
                <td>
                  <TextTitle>
                    { (sale.qtdVenda * sale.vlrUnitarioVenda).toFixed(2)}
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
