import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Index.vue'
import AboutView from '../views/pages/About.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => AboutView
    }
  ]
})

export default router
