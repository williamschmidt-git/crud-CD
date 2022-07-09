/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';
import { findAllSales } from '../../../http/sale';
import ApplicationContext from '../../../context/ApplicationContext';
// import { findById } from '../../../http/produto';
// import { findById } from '../../../http/produto';

export default function SaleList({ sales, handleDelete }) {
  // const [allSales, setAllSales] = useState();
  const { allSales, setAllSales } = useContext(ApplicationContext);

  // const newSales = async () => {
  //   sales.map(async (e) => {
  //     setAllSales(await findAllSales(e.idCliente));
  //   });
  // };

  const newSales = useCallback(async () => {
    sales.map(async (e) => {
      setAllSales(await findAllSales(e.idCliente));
    });
  }, [sales, setAllSales]);
  console.log(allSales);

  useEffect(() => {
    newSales();
  }, [newSales]);

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
            { allSales !== undefined && allSales.map((sale, index) => (
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
