<template>
  <Banner :logoWhite="logoWhite" />
</template>
<script>
import Banner from "../components/BannerElements/BrowLashBanner.vue";
export default {
  props: ["logoWhite"],
  components: {
    Banner,
  },
};
</script>