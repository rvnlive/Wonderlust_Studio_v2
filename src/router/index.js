// Importing dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importing Vuex
// import store from '../store'

import Home from '../views/wsHome'

Vue.use(VueRouter)

// Creating routes
const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { // Home
      path: '/Home',
      name: 'Homepage',
      component: Home,
      meta: {
        title: 'Homepage',
        meta: [
          {
            name: 'description',
            content: 'Welcome to Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Welcome to Wonderlust Studio.'
          }
        ]
      }
    },
    { // Hair
      path: '/Hair',
      name: 'Hair',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '../views/wsHair'),
      meta: {
        title: 'Hairstyling',
        meta: [
          {
            name: 'description',
            content: 'Hairstyling at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Hairstyling at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Aesthetics
      path: '/Aesthetic',
      name: 'Aesthetics',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '../views/wsAesthetics'),
      meta: {
        title: 'Aesthetics',
        meta: [
          {
            name: 'description',
            content: 'Aesthetic treatment at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Aesthetic treatment at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Biotricologia
      path: '/Biotricologia',
      name: 'Biotricologia',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '../views/wsBiotricologia'),
      meta: {
        title: 'Biotricologia',
        meta: [
          {
            name: 'description',
            content: 'Biotricologia treatment at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Biotricologia treatment at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Brows & Lashes
      path: '/Browlash',
      name: 'Brows N Lashes',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '../views/wsBrowLash'),
      meta: {
        title: 'Brows N Lashes',
        meta: [
          {
            name: 'description',
            content: 'Brow and lash treatments at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Brow and lash treatments at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Nails
      path: '/Nail',
      name: 'Nails',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '../views/wsNail'),
      meta: {
        title: 'Nails',
        meta: [
          {
            name: 'description',
            content: 'Nails at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Nails at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Facials
      path: '/Facial',
      name: 'Facials',
      component: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ '../views/wsFacials'),
      meta: {
        title: 'Facials',
        meta: [
          {
            name: 'description',
            content: 'Facial treatments at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Facial treatments at Wonderlust Studio.'
          }
        ]
      }
    },
    // Otherwise redirect to home
    { path: '*', redirect: '/Home' }
  ]
})

// Dynamically Updated Page Title
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta')

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key])
    })

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '')

    return tag
  })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  next()
})

export default router
