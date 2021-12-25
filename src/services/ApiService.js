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
  async getInformations(username) {
    try {
      return await apiClient.get(username)
    } catch (error) {
      throw new Error(error)
    }
  },
  async getRepositories(username) {
    try {
      return await apiClient.get(username + '/repos')
    } catch (error) {
      throw new Error(error)
    }
  },
  async getFollowers(username) {
    try {
      return await apiClient.get(username + '/followers')
    } catch (error) {
      throw new Error(error)
    }
  },
  async getFollowing(username) {
    try {
      return await apiClient.get(username + '/following')
    } catch (error) {
      throw new Error(error)
    }
  },
  async getOrganizations(username) {
    try {
      return await apiClient.get(username + '/orgs')
    } catch (error) {
      throw new Error(error)
    }
  }
}
