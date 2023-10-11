import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk3MDUxOTg4LCJpYXQiOjE2OTcwNTE2ODgsImp0aSI6IjkyZWQxZDQ5Y2VkYTRkMjg5NGI2OTI3YjgxZDljNjBkIiwidXNlcl9pZCI6MX0.Pt4okKJr3zxjYnfiH3MigLYFk4ll-ZHWsd3GjvIXwNs'

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
    console.error('(plugins.axios) Erro ao buscar dados:', error);
    throw error;
  }
};