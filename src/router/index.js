// Importing dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Importing pages
import Home from '../views/Home'

// Importing Vuex
// import store from '../store'

Vue.use(VueRouter)

// Creating routes
const router = new VueRouter({
  scrollBehavior () {
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'WS - Home',
        meta: [
          {
            name: 'description',
            content: 'Wonderlust Studio\'s home page.'
          },
          {
            property: 'og:description',
            content: 'Wonderlust Studio\'s home page.'
          }
        ]
      }
    }
    // ,{
    //   path: '/',
    //   name: 'Home',
    //   // Lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "Home" */ '../views/Home'),
    //   meta: {
    //     title: 'Home',
    //     meta: [
    //       {
    //         name: 'description',
    //         content: 'Groupomania\'s home page.'
    //       },
    //       {
    //         property: 'og:description',
    //         content: 'Groupomania\'s home page.'
    //       },
    //       {
    //         requiresAuth: true
    //       }
    //     ]
    //   }
    // },
    // // Otherwise redirect to home
    // { path: '*', redirect: '/' }
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
