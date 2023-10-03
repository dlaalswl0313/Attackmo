import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homeView',
      component: () => import('../views/homeView.vue')
    },
    {
      path: '/MovieMain',
      name: 'MovieMain',
      component: () => import('../views/MovieMain.vue')
    },
    {
      path: '/Mnow',
      name: 'Mnow',
      component: () => import('../views/Mnow.vue')
    },
    {
      path: '/Mcoming',
      name: 'Mcoming',
      component: () => import('../views/Mcoming.vue')
    },
    {
      path: '/Search',
      name: 'MovieSearch',
      component: () => import('../views/MovieSearch.vue')
    },
    {
      path: '/MovieTitle',
      name: 'MovieTitle',
      component: () => import('../views/MovieTitle.vue')
    }
  ]
})

export default router
