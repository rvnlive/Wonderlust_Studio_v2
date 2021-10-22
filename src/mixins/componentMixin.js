import wsLoading from '../helpers/forComponentStatus/wsLoadingComponent.vue'
import wsSlidingNavigation from '../components/MainComponents/wsSlidingNavigation.vue'
import wsFooter from '../components/MainComponents/wsFooter.vue'
export const componentMixin = {
    components: {
        wsLoading: wsLoading,
        wsSlidingNavigation: wsSlidingNavigation,
        wsScrollToTop: () => import(/* webpackPrefetch: true */ '../components/MainComponents/wsScrollToTop.vue'),
        wsFooter: wsFooter
    }
}