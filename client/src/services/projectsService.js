import api from './api'

/**
 * Get projects from API
 */
async function getProjects() {
  const response = await api.get('/api/projects')
  console.log(response)
  return response.data
}

export default {
  getProjects,
}
