import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2ODc5ODU4LCJpYXQiOjE2OTY4Nzk1NTgsImp0aSI6IjMwOTg4MTMyMzFmZjQyNjRhN2E1MmMyMDBhMGVlOWIwIiwidXNlcl9pZCI6MX0.6wlwDeAqcoVMByXL8InCb5CkdyFYZ3WA1O4qpxWJe54'
const apiUrl = 'http://localhost:8000/api/';

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const fetchData = async (table) => {
  try {
    const response = await instance.get(table);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    throw error;
  }
};