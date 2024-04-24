import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EditCardPage from '../views/Edit.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('../views/Logout.vue')
    },
    {
      path: '/profile',
      name:'profile',
      component: () => import('../views/profile.vue')
    },
   
    {
      path: '/edit-card/:cardId', 
      name: 'editCard',
      component: EditCardPage,
      props: true
    }
    
  ]
})

export default router
