import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMDU5MTgxLCJpYXQiOjE3MDAwNTg4ODEsImp0aSI6IjM5NTFmMDRmYzIyYzQzODY4MWEyZmUyNDZkZWMwZGVhIiwidXNlcl9pZCI6MX0._Bwlx892jNqE5kSOQCC02BQhl0xcZSmiIzs0JvIs1uY'

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


