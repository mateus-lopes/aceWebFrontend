import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAwMDYyMTk0LCJpYXQiOjE3MDAwNjE4OTQsImp0aSI6ImUyNzlhYmE5OGUwMzQ4NzRiYTNjNWM5N2U1YmU0OTkyIiwidXNlcl9pZCI6MX0.P_qgkFtHfEShWYFq_NevYDk1U7va-EvnzSzN8b7imXg'

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


