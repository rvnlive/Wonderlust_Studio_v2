<template>
  <div id="app">
    <wsLoading v-if="isLoading" />
    <div v-else>
      <b-container fluid class="p-0 m-0">
        <wsSlidingNavigation />
        <transition name="fade" mode="out-in">
          <router-view :logoBlack="logoBlack" :logoWhite="logoWhite" />
        </transition>
      </b-container>
      <wsScrollToTop />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  mixins: ["baseMixin", "componentMixin"],
};
</script>