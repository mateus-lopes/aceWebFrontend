import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk2OTcxMDc2LCJpYXQiOjE2OTY5NzA3NzYsImp0aSI6ImFkYTU3ZDU2ZDNkZDQ1YjU4ZjVlMGE3NjBmNjI0OWU4IiwidXNlcl9pZCI6MX0._y4D7okbeCy9EmQGHx-ajUwqC0OvZxejxFFq3ye7joc'

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