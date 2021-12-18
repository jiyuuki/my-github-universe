import axios from 'axios'
const baseUrl = 'https://api.github.com/users/'

const apiClient = axios.create({
  // baseURL: 'https://my-json-server.typicode.com/jiyuuki/my-github-universe',
  baseURL: baseUrl,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getInformation(username) {
    return apiClient.get(username)
  },
  getRepositories(username) {
    return apiClient.get(username + '/repos')
  },
  getFollowers(username) {
    return apiClient.get(username + '/followers')
  },
  getFollowing(username) {
    return apiClient.get(username + '/following')
  },
  getOrganizations(username) {
    return apiClient.get(username + '/orgs')
  }
}
