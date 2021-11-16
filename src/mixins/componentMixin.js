// import wsLoading from '../helpers/forComponentStatus/wsLoadingComponent.vue'
// import wsSlidingNavigation from '../components/MainComponents/wsSlidingNavigation.vue'
// import wsFooter from '../components/MainComponents/wsFooter.vue'
export const componentMixin = {
    components: {
        wsLoading: () => import(/* webpackChunkName: "System" */ '../helpers/forComponentStatus/wsLoadingComponent.vue'),
        wsSlidingNavigation: () => import(/* webpackChunkName: "System" */ '../components/MainComponents/wsSlidingNavigation.vue'),
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
        wsFooter: () => import(/* webpackChunkName: "System" */ '../components/MainComponents/wsFooter.vue')
    }
}