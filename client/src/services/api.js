import axios from 'axios'

/**
 * Create API client
 */
const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export default api
