import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
// import store from './store'

/* Importing plugins and styles */
import './assets/sass/style.scss'
import { IconsPlugin } from 'bootstrap-vue'

Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
