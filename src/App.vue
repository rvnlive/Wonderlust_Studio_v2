<template>
  <div id="app">
    <wsLoading v-if="isLoading" />
    <transition-group v-else name="slide-fade">
      <wsSlidingNavigation key="1" />
      <span
        v-on:click="backHome"
        v-show="!isAtHome"
        class="wsNavigation-back"
        key="2"
        >back</span
      >
      <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" key="3" />
      <wsFooter key="4" />
    </transition-group>
  </div>
</template>

<script>
//Components
import wsSlidingNavigation from "./Helpers/wsSlidingNavigation.vue";
// Page Elements
import LogoBlack from "./assets/img/ws_brand/logo_transparent_black.png";
import LogoWhite from "./assets/img/ws_brand/logo_transparent_white.png";
export default {
  name: "App",
  mixins: ["mainMixin"],
  components: {
    wsSlidingNavigation,
  },
  data() {
    return {
      logoBlack: LogoBlack,
      logoWhite: LogoWhite,
    };
  },
  computed: {},
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

.wsNavigation-back {
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 10px;
  box-shadow: -5px -5px 10px #a5a5a5, 5px 5px 10px #ffffff;
}
</style>