<template>
  <Banner :logoBlack="logoBlack" />
</template>
<script>
import Banner from "../components/BannerElements/NailBanner.vue";
export default {
  props: ["logoBlack"],
  components: {
    Banner,
  },
};
</script>