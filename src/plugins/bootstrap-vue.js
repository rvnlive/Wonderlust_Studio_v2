import Vue from 'vue'

/** For performance improvement
 * we are only going to import
 * necessary (active) plugins **/
import {
    // Plugins
    LayoutPlugin,
    DropdownPlugin,
    ImagePlugin,
    ButtonPlugin,
    ListGroupPlugin,
    // Icons
    BIconMap,
    BIconClock,
    BIconShare,
    BIconArrowUp
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import { IconsPlugin } from 'bootstrap-vue'

// Plugins in use
Vue.use(LayoutPlugin)
Vue.use(DropdownPlugin)
Vue.use(ImagePlugin)
Vue.use(ButtonPlugin)
Vue.use(ListGroupPlugin)
// Icons in use
Vue.component("BIconMap", BIconMap)
Vue.component("BIconClock", BIconClock)
Vue.component("BIconShare", BIconShare)
Vue.component("BIconArrowUp", BIconArrowUp)