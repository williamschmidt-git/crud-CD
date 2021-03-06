import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ApplicationContext from '../ApplicationContext';

function ApplicationProvider({ children }) {
  const [allCustomers, setAllCustomers] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [allSales, setAllSales] = useState();

  const contextValue = {
    allCustomers,
    setAllCustomers,
    allProducts,
    setAllProducts,
    allSales,
    setAllSales,
  };

  return (
    <ApplicationContext.Provider
      value={ contextValue }
    >
      { children }
    </ApplicationContext.Provider>
  );
}

ApplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApplicationProvider;
