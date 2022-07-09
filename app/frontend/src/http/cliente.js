import api from '../api';

export async function findByName(name) {
  try {
    console.log(name);
    const response = await api.get(`/cliente/list?name=${name}`);
    console.log(response);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function createCustomer(customer) {
  try {
    const response = await api.post('/cliente/', customer);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function updateCustomer(id, customer) {
  try {
    const response = await api.patch(`/cliente/${id}`, customer);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export async function deleteCustomer(id) {
  try {
    const response = await api.delete(`/cliente/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}
