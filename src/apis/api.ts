import axios from 'axios'

const API_URL = 'http://localhost:4000'

export const API = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
})

API.interceptors.request.use((config) => {
  console.info('calling api')

  return config
})
