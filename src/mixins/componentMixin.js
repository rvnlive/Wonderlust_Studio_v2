import wsLoading from '../helpers/forComponentStatus/wsLoadingComponent.vue'
import wsSlidingNavigation from '../components/MainComponents/wsSlidingNavigation.vue'
import wsFooter from '../components/MainComponents/wsFooter.vue'
export const componentMixin = {
    components: {
        wsLoading: wsLoading,
        wsSlidingNavigation: wsSlidingNavigation,
        wsTabSection: () => import(/* webpackChunkName: "Services", webpackPrefetch: true */ "../components/MainComponents/wsTabSection.vue"),
        Information: () =>
            import(
          /* webpackChunkName: "Services", webpackPrefecth: true */ "../components/wsTabElements/wsInformation.vue"
            ),
        Details: () =>
            import(
          /* webpackChunkName: "Services", webpackPrefecth: true */ "../components/wsTabElements/wsDetails.vue"
            ),
        Prices: () =>
            import(
          /* webpackChunkName: "Services", webpackPrefecth: true */ "../components/wsTabElements/wsPrices.vue"
            ),
        wsScrollToTop: () => import(/* webpackPrefetch: true */ '../components/MainComponents/wsScrollToTop.vue'),
        wsFooter: wsFooter
    }
}