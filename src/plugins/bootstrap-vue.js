import Vue from 'vue'

/** For performance improvement
 * we are only going to import
 * necessary (active) plugins **/
import {
    LayoutPlugin,
    DropdownPlugin,
    ImagePlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(LayoutPlugin)
Vue.use(DropdownPlugin)
Vue.use(ImagePlugin)
