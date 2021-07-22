import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/Homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomePage,
      redirect: '/home',
      children: [
        {
          path: 'home',
          component: () => import('@/views/home/index')
        },
        {
          path: 'about',
          component: () => import('@/views/about/index')
        }
      ]
    },
    {
      path: '/404',
      component: () => import('@/views/error-page/404')
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
