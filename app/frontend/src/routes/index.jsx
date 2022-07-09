import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import CustomerPage from '../pages/CustomerPage';
import EditPage from '../pages/EditPage';
import CreateCustomerPage from '../pages/CreateCustomerPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={ <MainPage /> } />
      <Route path="/customers" element={ <CustomerPage /> } />
      <Route path="/customers/edit" element={ <EditPage /> } />
      <Route path="/customers/create" element={ <CreateCustomerPage /> } />
    </Routes>
  );
}
