import Vue from 'vue'

/* Mixins */
import { baseMixin } from './baseMixin'
import { componentMixin } from './componentMixin'
import { navigationBarMixin } from './navigationBarMixin'
import { serviceInformationMixin } from './serviceInformationMixin'
import { serviceImagesMixin } from './serviceImagesMixin'
import { servicePricesMixin } from './servicePricesMixin'

Vue.mixin(baseMixin)
Vue.mixin(componentMixin)
Vue.mixin(navigationBarMixin)
Vue.mixin(serviceInformationMixin)
Vue.mixin(serviceImagesMixin)
Vue.mixin(servicePricesMixin)