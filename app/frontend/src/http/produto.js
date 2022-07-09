import api from '../api';

export async function findById(id) {
  try {
    const response = await api.get(`/produto/${id}}`);
    // console.log(response.data);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function createSale(product) {
  try {
    const response = await api.post('/produto/', product);
    console.log(response);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}
