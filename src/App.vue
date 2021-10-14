<template>
  <div id="app" class="m-0 p-0">
    <wsLoading v-if="isLoading" />
    <transition-group v-else name="slide-fade">
      <wsSlidingNavigation key="1" />
      <b-container class="p-0 m-0" key="2">
        <span
          @click="backHome"
          v-show="this.$router.currentRoute.path !== '/Home'"
          class="wsButton pt-1 pb-1 fadeIn"
          key="3"
          >
          <font-awesome-icon :icon="house" class="fa-arrow pt-1 ml-3 mr-3" /></span
        >
        <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" key="4" />
        <wsFooter key="5" />
      </b-container>
    </transition-group>
  </div>
</template>

<script>
// Page Elements
import LogoBlack from "./assets/img/ws_brand/logo_transparent_black.png";
import LogoWhite from "./assets/img/ws_brand/logo_transparent_white.png";
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "App",
  mixins: ["baseMixin", "mainMixin"],
  components: {},
  data() {
    return {
      logoBlack: LogoBlack,
      logoWhite: LogoWhite,
      house: faHome,
    };
  },
  computed: {},
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.5s ease;
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