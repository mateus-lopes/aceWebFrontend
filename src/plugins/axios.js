import axios from 'axios'

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk5NzM3Nzk5LCJpYXQiOjE2OTk3Mzc0OTksImp0aSI6Ijc4ZTFiNTRmNTYyYjQ2MWRhOTU3N2Q1MzkwZDZiNTk4IiwidXNlcl9pZCI6MX0.oQZNeJCMUvs-pYx2T47BaSMiz2XTyoegzkUwmOSDip8'

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


