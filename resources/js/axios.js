import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Ubah URL dasar sesuai dengan API Anda
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});

export default instance;
