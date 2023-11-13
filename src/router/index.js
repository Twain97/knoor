import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Faq from '../pages/Faq.vue'
import Load from '../views/Load.vue'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Landing',
      name: 'Landing',
      component: () => import('../views/Landing.vue')
    },
    {
      path: '/Faq',
      name: 'Faq',
      component: Faq
    },
    {
      path: '/Load',
      name: 'Load',
      component: Load
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/product',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/product.vue')
    },
    {
      path: '/wishList',
      name: 'wishList',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Favourite.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Cart.vue')
    }
  ]
})

export default router
