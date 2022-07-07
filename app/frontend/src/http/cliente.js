import api from '../api';

export async function findByName(name) {
  try {
    const response = await api.get(`/cliente?list=${name}`);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}

export async function createClient(cliente) {
  try {
    const response = await api.post('/', cliente);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}
