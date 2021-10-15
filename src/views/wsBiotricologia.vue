<template>
  <div>
    <wsLoading v-if="isLoading" class="mt-5" />
    <Banner v-else :logoWhite="logoWhite" class="wsServicePage m-0 p-0 mt-4" />
  </div>
</template>
<script>
import Banner from "../components/BannerElements/BiotricologiaBanner.vue";
export default {
  components: {
    Banner,
  },
};
</script>