import api from '../api';

export async function findByName(name) {
  try {
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

export async function findAllSalesByCustomer(id) {
  try {
    const response = await api.get(`/venda/cliente/${id}`);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function findAllSalesByProduct(id) {
  try {
    const response = await api.get(`/venda/produto/${id}`);
    return response.data;
  } catch (error) {
    return { error: e.message };
  }
}

export async function createSale(sale) {
  try {
    const response = await api.post('/venda/', sale);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function updateSale(id, sale) {
  try {
    const response = await api.patch(`/venda/${id}`, sale);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export async function deleteSale(id) {
  try {
    const response = await api.delete(`/venda/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}
