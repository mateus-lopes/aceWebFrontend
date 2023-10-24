import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MTUxODcxLCJpYXQiOjE2OTgxNTE1NzEsImp0aSI6IjlmYjQyZjRkMjNlNTQyZWJhNWMyM2FkMjBmY2M2ZTdiIiwidXNlcl9pZCI6MX0.l5RzuP27TR08KVvy73buBe4BD_yOcJ7twhFC1UKiKnc'

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
