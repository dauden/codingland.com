import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/Login'
import Claims from '@/components/Claims'
import { requireAuth } from '../auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/claims',
      name: 'Claims',
      beforeEnter: requireAuth,
      component: Claims
    }
  ]
})
