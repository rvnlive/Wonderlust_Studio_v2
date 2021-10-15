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
import Vue2TouchEvents from 'vue2-touch-events'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* Mixins */

import { baseMixin } from './mixins/baseMixin'
import { serviceMixin } from './mixins/wsServiceMixin'
import { mainMixin } from './mixins/mainMixin'

library.add(faUserSecret)
library.add(faFontAwesome)
Vue.use(IconsPlugin)
Vue.use(Vue2TouchEvents, {
  disableClick: false,
  touchClass: '',
  tapTolerance: 50,
  touchHoldTolerance: 400,
  swipeTolerance: 70,
  longTapTimeInterval: 400,
  namespace: 'touch'
})
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.mixin(baseMixin)
Vue.mixin(serviceMixin)
Vue.mixin(mainMixin)
new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
