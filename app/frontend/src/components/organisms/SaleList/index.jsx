/* eslint-disable no-unused-vars */
import React, { useEffect, useContext, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import TextTitle from '../../atoms/TextTitle';
import { findAllSalesByCustomer, findAllSalesByProduct } from '../../../http/sale';
import ApplicationContext from '../../../context/ApplicationContext';

export default function SaleList({ sales, handleDelete, productOrCustomer }) {
  const navigate = useNavigate();
  const { allSales, setAllSales } = useContext(ApplicationContext);

  const newSalesByCustomer = useCallback(async () => {
    sales.map(async (e) => {
      setAllSales(await findAllSalesByCustomer(e.idCliente));
    });
  }, [sales, setAllSales]);

  const newSalesByProduct = useCallback(async () => {
    sales.map(async (e) => {
      setAllSales(await findAllSalesByProduct(e.idProduto));
    });
  }, [sales, setAllSales]);

  useEffect(() => {
    if (productOrCustomer.includes('Cliente')) {
      newSalesByCustomer();
    }
    if (productOrCustomer.includes('Produto')) {
      newSalesByProduct();
    }
  }, [newSalesByCustomer, productOrCustomer, newSalesByProduct]);

  function manipulateDateString(string) {
    const newString = string.split('T');
    return newString[0];
  }

  function handleEditButton() {
    navigate('/sales/edit');
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
                    { sale.produto.dscProduto }
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
  productOrCustomer: PropTypes.string.isRequired,
};
