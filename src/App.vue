<template>
  <div id="app">
    <wsLoading v-if="isLoading" />
    <span v-else>
      <wsSlidingNavigation />
      <b-container class="p-0 m-0">
        <transition name="slide" mode="out-in">
          <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" />
        </transition>
        <wsFooter />
      </b-container>
    </span>
  </div>
</template>

<script>
export default {
  name: "App",
  mixins: ["baseMixin", "mainMixin"],
  components: {},
  data() {
    return {};
  },
};
</script>