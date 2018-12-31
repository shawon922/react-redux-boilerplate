import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8083/',
  timeout: 1000,
  headers: { "Content-type": "application/json", }
});

export default api;