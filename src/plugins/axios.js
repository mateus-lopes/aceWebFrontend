import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2ODk0MTc5LCJpYXQiOjE2OTY4OTM4NzksImp0aSI6IjVlZTZiODU3NzhjNDRjYThiYTkwYzExNGY3Mzc4ZTkwIiwidXNlcl9pZCI6MX0.RJIummP7QNPu__NnMplwekHZ80yuIBdOiqgzHZzVYSQ'
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