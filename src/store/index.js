import { createStore } from 'vuex'
import InformationService from '@/services/ApiService'

export default createStore({
  state: {
    username: null,
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
    async loadInformations({ commit }, username) {
      try {
        const response = await InformationService.getInformations(username)
        commit('SET_INFORMATIONS', response.data)
        commit('SET_USERNAME', username)
      } catch (error) {
        console.log({ error })
        throw new Error(error);
      }
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
