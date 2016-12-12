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
    FETCH_ITEM: async ({ commit, state }) => {
      commit('SET_ITEM', {})
      const id = state.route.params.id
      const model = state.route.params.model
      const json = await callApi({
        url: model,
        params: {
          id: `eq.${id}`,
        },
        single: true,
      })
      commit('SET_ITEM', json)
    },
  },
  mutations: {
    SET_LIST: (state, list) => {
      state.list = list
    },
    SET_ITEM: (state, item) => {
      state.item = item
    },
  },

  getters: {
    activeModel: state => models[state.route.params.model],
    activePage: state => state.route.query.page || 1,
    activeItems: state => state.list,
    activeItem: state => state.item,
  },
})

export default store
