import { createStore } from 'vuex'
import InformationService from '@/services/ApiService'

export default createStore({
  state: {
    username: '',
    informations: {}
  },
  mutations: {
    SET_INFORMATIONS(state, informations) {
      state.informations = informations
    },
    SET_USERNAME(state, username) {
      state.username = username
    }
  },
  actions: {
    loadInformations({ commit }, username) {
      InformationService.getInformation(username).then((response) => {
        commit('SET_INFORMATIONS', response.data)
        commit('SET_USERNAME', username)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  getters: {
    getUsername(state) {
      return state.username
    },
    getInformations(state) {
      return state.informations
    }
  },
  modules: {
  }
})
