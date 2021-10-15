<template>
  <div>
    <wsLoading v-if="isLoading" class="mt-4" />
    <Banner v-else :logoBlack="logoBlack" class="wsServicePage m-0 p-0 mt-4" />
  </div>
</template>
<script>
import Banner from "../components/BannerElements/AestheticsBanner.vue";
export default {
  components: {
    Banner,
  },
};
</script>