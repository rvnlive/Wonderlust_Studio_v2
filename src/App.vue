<template>
  <div id="app">
    <b-container class="m-0 p-0 text-center wrapper">
      <div class="topper m-0 p-0">
        <transition name="slide-fade">
          <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" />
        </transition>
        <div class="wsBanners-placeholder pt-4 ml-5 mr-5">
          <!-- Hair Section Indicator STARTS --><router-link
            v-if="$router.currentRoute.path === '/Hair'"
            to="/Hair"
            aria-label="Hair"
            class="
              wsBanners-placeholder__item wsBanners-placeholder__item--active
            "
          />
          <router-link
            v-else
            to="/Hair"
            aria-label="Hair"
            class="wsBanners-placeholder__item"
          /><!-- Hair Section Indicator ENDS -->

          <!-- Aesthetics Section Indicator STARTS --><router-link
            v-if="$router.currentRoute.path === '/Aesthetic'"
            to="/Aesthetic"
            aria-label="Aesthetics"
            class="
              wsBanners-placeholder__item wsBanners-placeholder__item--active
            "
          />
          <router-link
            v-else
            to="/Aesthetic"
            aria-label="Aesthetics"
            class="wsBanners-placeholder__item"
          /><!-- Aesthetics Section Indicator ENDS -->

          <!-- Biotricologia Section Indicator STARTS --><router-link
            v-if="$router.currentRoute.path === '/Biotricologia'"
            to="/Biotricologia"
            aria-label="Biotricologia"
            class="
              wsBanners-placeholder__item wsBanners-placeholder__item--active
            "
          />
          <router-link
            v-else
            to="/Biotricologia"
            aria-label="Biotricologia"
            class="wsBanners-placeholder__item"
          /><!-- Biotricologia Section Indicator ENDS -->

          <b-icon
            icon="arrow-left-right"
            animation="cylon"
            class="slider-icon"
          />

          <!-- BrowLash Section Indicator STARTS --><router-link
            v-if="$router.currentRoute.path === '/Browlash'"
            to="/Browlash"
            aria-label="Brows & Lashes"
            class="
              wsBanners-placeholder__item wsBanners-placeholder__item--active
            "
          />
          <router-link
            v-else
            to="/Browlash"
            aria-label="Brows & Lashes"
            class="wsBanners-placeholder__item"
          /><!-- BrowLash Section Indicator ENDS -->

          <!-- Nail Section Indicator STARTS --><router-link
            v-if="$router.currentRoute.path === '/Nail'"
            to="/Nail"
            aria-label="Nails"
            class="
              wsBanners-placeholder__item wsBanners-placeholder__item--active
            "
          />
          <router-link
            v-else
            to="/Nail"
            aria-label="Nails"
            class="wsBanners-placeholder__item"
          /><!-- Nail Section Indicator ENDS -->

          <!-- Facial Section Indicator STARTS --><router-link
            v-if="$router.currentRoute.path === '/Facial'"
            to="/Facial"
            aria-label="Facials"
            class="
              wsBanners-placeholder__item wsBanners-placeholder__item--active
            "
          />
          <router-link
            v-else
            to="/Facial"
            aria-label="Facials"
            class="wsBanners-placeholder__item"
          /><!-- Facial Section Indicator ENDS -->
        </div>
      </div>
      <ScrollToTop />
    </b-container>
  </div>
</template>

<script>
// Plugins

// Components
import ScrollToTop from "./Helpers/ScrollToTop.vue";

// Page Elements
import LogoBlack from "./assets/img/ws_brand/logo_transparent_black.png";
import LogoWhite from "./assets/img/ws_brand/logo_transparent_white.png";
export default {
  name: "App",
  components: {
    // Plugins [
    // ]
    // Components [
    ScrollToTop,
    // LoadingComponent,
    // ]
    // Page Elements [
    // ]
  },
  data() {
    return {
      logoBlack: LogoBlack,
      logoWhite: LogoWhite,
    };
  },
  computed: {},
  methods: {
    fadeIn() {
      document.body.style.opacity = "1";
    },
  },
  created() {},
  mounted() {
    this.fadeIn();
  },
};
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(0px);
  opacity: 0;
}
</style>