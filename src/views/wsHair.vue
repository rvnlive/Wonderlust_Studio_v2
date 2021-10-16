<template>
  <div>
    <wsLoading v-if="isLoading" class="mt-5" />
    <Banner v-else :logoBlack="logoBlack" class="wsServicePage m-0 p-0 mt-4" />
  </div>
</template>
<script>
import Banner from "../components/wsHair/wsIndex.vue";
export default {
  components: { Banner },
};
</script>