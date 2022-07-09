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

export async function deleteProduct(id) {
  try {
    const response = await api.delete(`/produto/${id}`);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export async function updateProduct(id, product) {
  try {
    const newProduct = {
      dscProduto: product.dscProduto,
      vlrUnitario: Number(product.vlrUnitario),
    };
    const response = await api.patch(`/produto/${id}`, newProduct);
    return response.data;
  } catch (error) {
    return { error: error.message };
  }
}

export async function createProduct(product) {
  try {
    const newProduct = {
      dscProduto: product.dscProduto,
      vlrUnitario: Number(product.vlrUnitario),
    };
    const response = await api.post('/produto/', newProduct);
    console.log(response);
    return response.data;
  } catch (e) {
    return { error: e.message };
  }
}
