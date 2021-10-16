import Vue from 'vue'

/** For performance improvement
 * we are only going to import
 * necessary (active) plugins **/
import {
    LayoutPlugin,
    DropdownPlugin,
    ImagePlugin,
    ButtonPlugin,
    ListGroupPlugin
} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { IconsPlugin } from 'bootstrap-vue'

Vue.use(LayoutPlugin)
Vue.use(DropdownPlugin)
Vue.use(ImagePlugin)
Vue.use(ButtonPlugin)
Vue.use(ListGroupPlugin)
Vue.use(IconsPlugin)