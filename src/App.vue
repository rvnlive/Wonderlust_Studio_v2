<template>
  <div id="app">
    <b-container class="m-0 p-0 topper text-center">
        <transition name="slide-fade">
          <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" />
        </transition>
    </b-container>
  </div>
</template>

<script>
// Page Elements
import LogoBlack from "./assets/img/ws_brand/logo_transparent_black.png";
import LogoWhite from "./assets/img/ws_brand/logo_transparent_white.png";
export default {
  name: "App",
  components: {},
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