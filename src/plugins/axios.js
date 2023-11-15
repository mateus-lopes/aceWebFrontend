import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMDU1NDUxLCJpYXQiOjE3MDAwNTUxNTEsImp0aSI6IjNjNGRmYzZkZDY1NTQ0Y2I5NjUxODQzMzE2NzdjYmEyIiwidXNlcl9pZCI6MX0.h9apYkmZ6k-kWj6b3eimk1kjvx1Mwoy7RDWLoOXyEi0'

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


