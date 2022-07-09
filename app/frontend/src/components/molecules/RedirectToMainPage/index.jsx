/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';

export default function RedirectToMainPage() {
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/');
  };
  return (
    <Button text="Página inicial" onClick={ () => redirect() } />
  );
}
