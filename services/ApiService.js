import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://api.github.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

export default {
  getInformation() {
    return apiClient.get('/users/jiyuuki')
  },
  getRepos() {
    return apiClient.get('/users/jiyuuki/repos')
  },
  getFollowers() {
    return apiClient.get('/users/jiyuuki/followers')
  },
  getFollowing() {
    return apiClient.get('/users/jiyuuki/following')
  },
  getOrganizations() {
    return apiClient.get('/users/jiyuuki/orgs')
  }
}
