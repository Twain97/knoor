import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Faq from '../pages/Faq.vue'
import Load from '../views/Load.vue'
import ResetPassword from '../pages/ResetPassword.vue'
import {auth} from '../firebase/firebase.js'


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: () => import('../views/Landing.vue')
    },
    {
      path: '/ResetPassword',
      name: 'ResetPassword',
      component: ResetPassword
    },
    {
      path: '/Faq',
      name: 'Faq',
      meta:{ requiresAuth : true },
      component: Faq
    },
    {
      path: '/Load',
      name: 'Load',
      component: Load
    },
    {
      path: '/Home',
      name: 'Home',
      meta:{ requiresAuth : true },
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
      meta:{ requiresAuth : true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Favourite.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      meta:{ requiresAuth : true },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../pages/Cart.vue')
    }
  ]
})

auth.onAuthStateChanged((user)=>{
  if(!user){
    return router.push('/')
   }
  

  router.beforeEach(async(to)=>{
    
    if(to.path == '/' && auth.currentUser){
      return router.push(router.currentRoute)
    }
    if(to.path == '/Home' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path ==  '/cart' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/wishList' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/Faq' && !auth.currentUser){
      return router.push('/')
    }
  })
})

export default router
