import axios from 'axios';

const LOCAL_API_URL = 'http://localhost:5000';

const api = axios.create({
  baseURL: LOCAL_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createProduct = (productData) => {
  return api.post('/products', productData);
};

export const getProducts = () => {
  return api.get('/products');
};

export const getProduct = (id) => {
  return api.get(`/products/${id}`);
};

export const updateProduct = (id, productData) => {
  return api.put(`/products/${id}`, productData);
};

export const deleteProduct = (id) => {
  return api.delete(`/products/${id}`);
};
