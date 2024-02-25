import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthenticated: false 
  },
  mutations: {
    login(state) {
      state.isAuthenticated = true 
    },
    logout(state) {
      state.isAuthenticated = false 
    }
  },
  actions: {
    login({ commit }) {
      
      commit('signin')
    },
    logout({ commit }) {
    
      commit('logout')
    }
  }
})
