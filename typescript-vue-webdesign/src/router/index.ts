import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    name: 'おみくじ',
    path: '/omikuji',
    component: () => import('@/pages/Omikuji.vue')
  }
]

const router = new Router({
  routes
})

export { routes, router }
