import React, { useState } from 'react';
import Input from '../../components/atoms/Input';
// import CentralizeTemplate from '../../templates/CentralizeTemplate';

export default function CustomerPage() {
  const [inputName, setName] = useState('');
  console.log(inputName);

  function handleInput(e) {
    const { value, name } = e.target;
    setName({
      [name]: value,
    });
  }

  return (
    <div>
      <Input type="text" name="inputName" onChange={ (e) => handleInput(e) } />
    </div>
  );
}
