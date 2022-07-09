import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CustomerPage from '../pages/CustomerPage';
import EditCustomerPage from '../pages/EditCustomerPage';
import CreateCustomerPage from '../pages/CreateCustomerPage';
import SalesPage from '../pages/SalesPage';
import ProductPage from '../pages/ProductPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/customers" element={ <CustomerPage /> } />
      <Route path="/customers/edit" element={ <EditCustomerPage /> } />
      <Route path="/customers/create" element={ <CreateCustomerPage /> } />
      <Route path="/products" element={ <ProductPage /> } />
      <Route path="/sales/" element={ <SalesPage /> } />
    </Routes>
  );
}
