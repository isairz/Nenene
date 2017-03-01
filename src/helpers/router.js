import Vue from 'vue'
import Router from 'vue-router'
import models from '../config/models'

Vue.use(Router)

import Sample from '../views/Sample.vue'
import List from '../views/List.vue'
import Edit from '../views/Edit.vue'

function generateRoutes () {
  let routes = []
  for (let model in models) {
    routes.push({
      path: `/:model(${model})`,
      component: List,
    })
    routes.push({
      path: `/:model(${model})/add`,
      component: Edit,
    })
    routes.push({
      path: `/:model(${model})/edit/:id(\\d+)`,
      component: Edit,
    })
  }
  return routes
}

const router = new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    { path: '/', component: Sample },
    ...generateRoutes(),
    { path: '*', redirect: '/' },
  ],
})

export default router
