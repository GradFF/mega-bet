import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/show',
      name: 'show',
      component: () => import('./components/ShowView.vue')
    }
  ]
})

export default router
