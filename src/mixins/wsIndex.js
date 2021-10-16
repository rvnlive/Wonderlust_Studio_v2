import Vue from 'vue'

/* Mixins */
import { baseMixin } from './baseMixin'
import { componentMixin } from './componentMixin'
import { imageMixin } from './imageMixin'
import { serviceMixin } from './serviceMixin'

Vue.mixin(baseMixin)
Vue.mixin(componentMixin)
Vue.mixin(imageMixin)
Vue.mixin(serviceMixin)