import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMDQ4MjAzLCJpYXQiOjE3MDAwNDc5MDMsImp0aSI6ImRhZWZiMjU0OWE1NTQyN2NiYWU4M2E5MDc2MjExZmY1IiwidXNlcl9pZCI6MX0.pgWoPQC-zCveG9CbEEMQJE1ZMh8C66UEqphNeU35n-A'

const apiUrl = 'http://localhost:8000/api/'

const instance = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${token}` 
  }
})

export const fetchData = async (table) => {
  try {
    const response = await instance.get(table)
    return response.data
  } catch (error) {
    console.error('(plugins.axios) Erro ao buscar dados:', error)
    throw error
  }
}


