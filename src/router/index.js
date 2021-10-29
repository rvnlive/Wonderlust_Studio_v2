// Importing dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importing Views
import Home from '@/views/wsHome'

Vue.use(VueRouter)

// Creating routes
const router = new VueRouter({
  base: './',
  mode: 'history',
  routes: [
    { // Home
      path: '/Home',
      name: 'Homepage',
      component: Home
    },
    { // Hair
      path: '/Hair',
      name: 'Hairstyling',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '@/views/wsHair'),
      children: [
        {
          path: ':query'
        }
      ]
    },
    { // Aesthetics
      path: '/Aesthetic',
      name: 'Aesthetics',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '@/views/wsAesthetics'),
      children: [
        {
          path: ':query'
        }
      ]
    },
    { // Biotricologia
      path: '/Biotricologia',
      name: 'Biotricologia',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '@/views/wsBiotricologia'),
      children: [
        {
          path: ':query'
        }
      ]
    },
    { // Brows & Lashes
      path: '/Browlash',
      name: 'BrowsNLashes',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '@/views/wsBrowLash'),
      children: [
        {
          path: ':query'
        }
      ]
    },
    { // Nails
      path: '/Nail',
      name: 'Nails',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '@/views/wsNail'),
      children: [
        {
          path: ':query'
        }
      ]
    },
    { // Facials
      path: '/Facial',
      name: 'Facials',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '@/views/wsFacials'),
      children: [
        {
          path: ':query'
        }
      ]
    },
    // Otherwise redirect to home
    { path: '*', redirect: '/Home' }
  ]
})

export default router
