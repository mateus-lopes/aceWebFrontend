import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk4MTc2MTQ0LCJpYXQiOjE2OTgxNzU4NDQsImp0aSI6IjNhZjg5NjNlNzI4MTQ3NGI4MGQ1ODQzNDdjMDE3ZmVjIiwidXNlcl9pZCI6MX0.v5erUQv9HN1lv06dCo35ZKG337hhsWycTjh2hYqXkPU'

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
