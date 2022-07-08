import React, { useContext, useState } from 'react';
import Input from '../../components/atoms/Input';
import ApplicationContext from '../../context/ApplicationContext';
import Button from '../../components/atoms/Button';
import { updateCustomer } from '../../http/cliente';

export default function EditPage() {
  const { allCustomers } = useContext(ApplicationContext);
  const [editedCustomer, setEditedCustomer] = useState({
    nmCliente: '',
    cidade: '',
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditedCustomer({
      ...editedCustomer,
      [name]: value,
    });
  };

  const handleClick = (id) => {
    console.log(id);
    updateCustomer(id, editedCustomer);
  };

  return (
    <div>
      {allCustomers && (
        <div>
          { allCustomers.map((customer, index) => (
            <div key={ index }>
              <Input
                type="text"
                placeholder={ customer.nmCliente }
                name="nmCliente"
                onChange={ (e) => handleChange(e) }
              />
              <Input
                type="text"
                placeholder={ customer.cidade }
                name="cidade"
                onChange={ (e) => handleChange(e) }
              />
              <Button text="Send" onClick={ () => handleClick(customer.idCliente) } />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
