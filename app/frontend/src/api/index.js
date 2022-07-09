import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'http://localhost:3001',
});

api.interceptors.request.use((config) => {
  try {
    return config;
  } catch (e) {
    console.log(e.message);
  }
});

export default api;
