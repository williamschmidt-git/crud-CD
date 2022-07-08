import React, { useContext, useState } from 'react';
import Input from '../../components/atoms/Input';
import ApplicationContext from '../../context/ApplicationContext';
import Button from '../../components/atoms/Button';

export default function EditPage() {
  const { allCustomers } = useContext(ApplicationContext);
  const [editedCustomer, setEditedCustomer] = useState({
    nmCliente: '',
    cidade: '',
  });

  const handleChange = (e) => {
    console.log(e);
    const { value, name } = e.target;
    setEditedCustomer({
      ...editedCustomer,
      [name]: value,
    });
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
              <Button text="Send" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
