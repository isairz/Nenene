import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import callApi from './callApi'
import models from '../helpers/models'
import { openMessage } from './message'

const store = new Vuex.Store({
  state: {
    list: [],
    item: {},
    perPage: 20,
  },
  actions: {
    CALL_API: ({ commit, state }, options) => {
      return callApi(options).catch(err => {
        console.log(err)
        openMessage({
          type: 'danger',
          title: 'API Error!',
          message: err,
          duration: 0,
          showCloseButton: true,
        })
      })
    },
    FETCH_LIST: async ({ commit, state, dispatch }) => {
      const model = state.route.params.model
      const page = state.route.query.page || 1
      const json = await dispatch('CALL_API', {
        url: model,
        params: {
          order: 'id.desc',
        },
        page,
        itemsPerPage: state.perPage,
      })
      commit('SET_LIST', json)
    },
    FETCH_ITEM: async ({ commit, state, dispatch }) => {
      commit('SET_ITEM', {})
      const id = state.route.params.id
      const model = state.route.params.model
      const json = await dispatch('CALL_API', {
        url: model,
        params: {
          id: `eq.${id}`,
        },
        single: true,
      })
      commit('SET_ITEM', json)
    },
    UPDATE_ITEM: async ({ commit, state, dispatch }, item) => {
      const id = state.route.params.id
      const model = state.route.params.model
      // if (id !== item.id) return
      const json = await dispatch('CALL_API', {
        url: model,
        method: 'patch',
        params: {
          id: `eq.${id}`,
        },
        data: item,
      })
      return json
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
