import api from '../api';

export async function findById(id) {
  try {
    const response = await api.get(`/produto/${id}}`);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function createSale(product) {
  try {
    const response = await api.post('/produto/', product);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function findByName(name) {
  try {
    const response = await api.get(`/produto/list?desc=${name}`);
    console.log(response.data);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}
