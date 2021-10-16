export const componentMixin = {
    components: {
        wsLoading: () => import('../helpers/forComponentStatus/wsLoadingComponent.vue'),
        wsSlidingNavigation: () => import('../components/MainComponents/wsSlidingNavigation.vue'),
        wsScrollToTop: () => import('../components/MainComponents/wsScrollToTop.vue'),
        wsFooter: () => import('../components/MainComponents/wsFooter.vue')
    }
}