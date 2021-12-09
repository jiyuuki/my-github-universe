import axios from 'axios'

const apiClient = axios.create({
  // baseURL: 'https://api.github.com',
  baseURL: 'https://my-json-server.typicode.com/jiyuuki/my-github-universe',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getInformation() {
    return apiClient.get('/informations')
  },
  getRepos() {
    return apiClient.get('/repositories')
  },
  getFollowers() {
    return apiClient.get('/followers')
  },
  getFollowing() {
    return apiClient.get('/following')
  },
  getOrganizations() {
    return apiClient.get('/organisations')
  }
}
