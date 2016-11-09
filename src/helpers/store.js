import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import callApi from './callApi'
import models from '../helpers/models'

const store = new Vuex.Store({
  state: {
    list: [],
    item: {},
    perPage: 20,
  },
  actions: {
    FETCH_LIST: async ({ commit, state }) => {
      const model = state.route.params.model
      const page = state.route.query.page || 1
      const json = await callApi({
        url: model,
        params: {
          order: 'id.desc',
        },
        page,
        itemsPerPage: state.perPage,
      })
      commit('SET_LIST', json)
    },
  },
  mutations: {
    SET_LIST: (state, list) => {
      state.list = list
    },
  },

  getters: {
    activeModel: state => models[state.route.params.model],
    activeItems: state => state.list,
    activePage: state => state.route.query.page || 1,
  },
})

export default store
