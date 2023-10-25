import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MjAxNzI0LCJpYXQiOjE2OTgyMDE0MjQsImp0aSI6IjZhMTk5ZjZmYWUwMjQ3OWY5MzNiNTE5NDE1ZmFhMzdlIiwidXNlcl9pZCI6MX0.58-AiEfF2cdcWhC8b5twlcl5CvpeDGnpWcstcdSQOtE'

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
