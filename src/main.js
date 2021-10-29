// import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Meta from 'vue-meta'
// import store from './store'

/* Importing plugins and styles */
import './assets/sass/style.scss'
import './plugins/bootstrap-vue'
import './plugins/font-awesome'
// import Vue2TouchEvents from 'vue2-touch-events'


// Vue.use(Vue2TouchEvents, {
//   disableClick: false,
//   touchClass: '',
//   tapTolerance: 50,
//   touchHoldTolerance: 400,
//   swipeTolerance: 70,
//   longTapTimeInterval: 400,
//   namespace: 'touch'
// })
Vue.use(Meta)
Vue.config.productionTip = false

import './mixins/wsIndex'
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
