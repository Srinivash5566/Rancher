// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5050/api/auth',  // Adjusted to match your backend API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
