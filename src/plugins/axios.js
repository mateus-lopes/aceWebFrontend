import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5Njc0ODcxLCJpYXQiOjE2OTk2NzQ1NzEsImp0aSI6ImVlNjNjOTA2ZTcyYzQyZGY4YTc0NzMxNjViMjVmNDRmIiwidXNlcl9pZCI6MX0.9bCVDg6hY4WyoPdeF23dDKzq2nqn99dp08wfVIwxP_g'

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


