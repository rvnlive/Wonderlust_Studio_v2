<template>
  <div id="app" class="m-0 p-0">
    <wsLoading v-if="isLoading" />
    <transition-group v-else name="slide-fade">
      <wsSlidingNavigation key="1" />
      <span
        v-on:click="backHome"
        v-show="!isAtHome"
        class="wsButton ml-2 pl-3 pr-3 pt-1 pb-1"
        key="2"
        >home</span
      >
      <b-container class="p-0 m-0" key="3">
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
export default {
  name: "App",
  mixins: ["mainMixin"],
  components: {},
  data() {
    return {
      logoBlack: LogoBlack,
      logoWhite: LogoWhite,
    };
  },
  computed: {},
};
</script>
<style scoped>
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