import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import App from './App'
import store from './helpers/store'
import router from './helpers/router'

sync(store, router)

/* eslint-disable no-new */
const app = new Vue({
  router,
  store,
  ...App,
})

app.$mount('#app')
