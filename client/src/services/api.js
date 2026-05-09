import axios from 'axios'

/**
 * Create API client
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

export default api
