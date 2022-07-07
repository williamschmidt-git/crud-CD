import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

api.interceptors.request.use((config) => {
  try {
    return config;
  } catch (e) {
    console.log(e.message);
  }
});

export default api;
