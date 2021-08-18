import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const apiUser = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: [],
    userEmail: '',
    userPhone: ''
  },
  mutations: {
    setUser: (state, user) => state.user = user,
    setPhone: (state, phone) => state.userPhone = phone,
    setEmail: (state, email) => state.userEmail = email
  },
  actions: {
    async searchUser ({ commit }, email) {
      const response = await apiUser.get(`/users?email=${email}`)
      console.log(response.data[0])
      if (response.data[0] !== undefined) {
        commit('setEmail', response.data[0].email)
      } else {
        commit('setEmail', '')
      }
    },
    async searchPhone ({ commit }, phone) {
      const response = await apiUser.get(`/users?celular=${phone}`)
      console.log(response.data[0])
      if (response.data[0] !== undefined) {
        commit('setPhone', response.data[0].celular)
      } else {
        commit('setPhone', '')
      }
    },
    async postUser ({ commit }, user) {
      try {
        const response = await apiUser.post('/users/', user)
        console.log(response.data)
        commit('setUser', response.data)
      } catch (error) {
        alert('Erro: ', error)
      }
    }
  },
  modules: {
  }
})
