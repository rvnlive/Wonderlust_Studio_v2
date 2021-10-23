<template>
  <div>
    <wsSlidingSubNavigation />
    <wsLoading v-if="isLoading" class="mt-5" />
    <Banner v-else :logoBlack="logoBlack" class="wsServicePage m-0 p-0 mt-5" />
  </div>
</template>
<script>
import Banner from "../components/wsHair/wsIndex.vue";
export default {
  components: { Banner },
  mounted() {
    this.isAtHome = false
  },
};
</script>