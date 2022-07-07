import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/login" element={ <MainPage /> } />
    </Routes>
  );
}
