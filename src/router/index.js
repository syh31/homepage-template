import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/redirect',
      component: homePage,
      children: [
        {
          path: '/redirect/:path(.*)',
          component: () => import('@/redirect/index')
        }
      ]
    },
    {
      path: '/',
      component: homePage,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/components/views/main'),
          name: 'Home'
        },
        {
          path: 'school',
          component: () => import('@/components/views/schoolFirst'),
          name: 'School First'
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/components/login')
    },
    {
      path: '/404',
      component: () => import('@/components/error-page/404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
