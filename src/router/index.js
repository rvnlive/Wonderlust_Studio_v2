// Importing dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importing pages
import Hair from '../views/wsHair'

// Importing Vuex
// import store from '../store'

Vue.use(VueRouter)

// Creating routes
const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    { // Hair
      path: '/Hair',
      name: 'Hair',
      component: Hair,
      meta: {
        title: 'WS - Hair',
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
      component: () => import(/* webpackPrefetch: true */ '../views/wsAesthetics'),
      meta: {
        title: 'WS - Aesthetics',
        meta: [
          {
            name: 'description',
            content: 'Aesthetics at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Aesthetics at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Biotricologia
      path: '/Biotricologia',
      name: 'Biotricologia',
      component: () => import(/* webpackPrefetch: true */ '../views/wsBiotricologia'),
      meta: {
        title: 'WS - Biotricologia',
        meta: [
          {
            name: 'description',
            content: 'Biotricologia at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Biotricologia at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Brows & Lashes
      path: '/Browlash',
      name: 'Brows N Lashes',
      component: () => import(/* webpackPrefetch: true */ '../views/wsBrowLash'),
      meta: {
        title: 'WS - Brows N Lashes',
        meta: [
          {
            name: 'description',
            content: 'Brows and Lashes at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Brows and Lashes at Wonderlust Studio.'
          }
        ]
      }
    },
    { // Nails
      path: '/Nail',
      name: 'Nails',
      component: () => import(/* webpackPrefetch: true */ '../views/wsNail'),
      meta: {
        title: 'WS - Nails',
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
      component: () => import(/* webpackPrefetch: true */ '../views/wsFacials'),
      meta: {
        title: 'WS - Facials',
        meta: [
          {
            name: 'description',
            content: 'Facials at Wonderlust Studio.'
          },
          {
            property: 'og:description',
            content: 'Facials at Wonderlust Studio.'
          }
        ]
      }
    },
    // Otherwise redirect to home
    { path: '*', redirect: '/Hair' }
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
