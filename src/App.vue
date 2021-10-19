<template>
  <div id="app" class="wsServicePage">
    <wsLoading v-if="isLoading" />
    <span v-else>
      <wsSlidingNavigation />
      <b-container fluid class="p-0 m-0">
        <transition name="slide" mode="out-in">
          <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" />
        </transition>
      </b-container>
      <wsScrollToTop />
    </span>
  </div>
</template>

<script>
export default {
  name: "App",
  mixins: ["baseMixin", "componentMixin"],
  components: {},
  data() {
    return {};
  },
};
</script>