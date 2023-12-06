import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../pages/Home.vue'
import Faq from '../pages/Faq.vue'
import About from '../pages/About.vue'
import Deals from '../pages/Deals.vue'
import Load from '../views/Load.vue'
import userProfile from '../pages/UserProfile.vue'
import TrackOrder from '../pages/TrackOrder.vue'
import ResetPassword from '../pages/ResetPassword.vue'
import ConfirmPayment from '../pages/ConfirmPayment.vue'
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
      path: '/ConfirmPayment',
      name: 'ConfirmPayment',
      meta:{ requiresAuth : true },
      component: ConfirmPayment
    },
    {
      path: '/TrackOrder',
      name: 'TrackOrder',
      meta:{ requiresAuth : true },
      component:TrackOrder
    },
    {
      path: '/Load',
      name: 'Load',
      component: Load
    },
    {
      path: '/About',
      name: 'About',
      component: About
    },
    {
      path: '/Home',
      name: 'Home',
      meta:{ requiresAuth : true },
      component: Home
    },
    {
      path: '/Deals',
      name: 'Deals',
      meta:{ requiresAuth : true },
      component: Deals
    },
    {
      path: '/userProfile',
      name: 'userProfile',
      meta:{ requiresAuth : true },
      component: userProfile
    },
    {
      path: '/product',
      name: 'product',
      meta:{requiresAuth:true},
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
    if(to.path == '/rackOrder' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/Deals' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/product' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path ==  '/cart' && !auth.currentUser){
      return router.push('/')
    }
    if(to.path == '/userProfile' && !auth.currentUser){
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
