import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';
import { findSale } from '../../../http/sale';
// import { findById } from '../../../http/produto';
// import { findById } from '../../../http/produto';

export default function SaleList({ sales, handleDelete }) {
  // const [foundProducts, setFoundProducts] = useState([]);
  const [allSales, setAllSales] = useState([]);
  // const [singleSale, setSingleSale] = useState({
  //   nmCliente: '',
  //   nmProduto: '',
  //   quantidade: 0,
  //   valor: 0,
  //   data: '',
  //   total: 0,
  // });

  console.log(allSales);

  const getSaleData = useCallback(async (id) => {
    await findSale(id).then((data) => setAllSales(data));
  }, []);

  useEffect(() => {
    getSaleData(1).then((data) => setAllSales(data));
  }, []);

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
