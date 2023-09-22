import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../components/HomeView.vue'

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
      component: () => import('../components/AboutMe.vue')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('../components/Experience.vue')
    }
  ]
})

export default router
