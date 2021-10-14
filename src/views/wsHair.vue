<template>
    <Banner :logoBlack="logoBlack" :logoWhite="logoWhite" />
</template>
<script>
import Banner from "../components/BannerElements/HairBanner.vue";
export default {
  props: ["logoBlack", "logoWhite"],
  components: {
    Banner,
  },
};
</script>