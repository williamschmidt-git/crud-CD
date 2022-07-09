import api from '../api';

export async function findByName(name) {
  try {
    console.log(name);
    if (name.nome) {
      const response = await api.get(`/venda/list?nome=${name.nome}`);
      return response.data;
    }
    if (name.desc) {
      const response = await api.get(`/venda/list?desc=${name.desc}`);
      return response.data;
    }
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
