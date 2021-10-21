import Vue from 'vue'

/** For performance improvement
 * we are only going to import
 * necessary (active) plugins **/
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)
// library.add(faFontAwesome)
Vue.component('font-awesome-icon', FontAwesomeIcon)