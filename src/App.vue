<template>
  <div id="app">
    <wsLoading v-if="isLoading"/>
    <transition-group v-else name="slide-fade">
      <wsSlidingNavigation key="1" />
      <b-container class="p-0 m-0" key="2">
        <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" key="3" />
        <wsFooter key="4" />
      </b-container>
    </transition-group>
  </div>
</template>

<script>
// Page Elements
import { faHome } from "@fortawesome/free-solid-svg-icons";
export default {
  name: "App",
  mixins: ["baseMixin", "mainMixin"],
  components: {},
  data() {
    return {
      house: faHome,
    };
  },
};
</script>