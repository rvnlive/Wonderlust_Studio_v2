<template>
  <Banner :logoWhite="logoWhite" />
</template>
<script>
import Banner from "../components/BannerElements/BiotricologiaBanner.vue";
export default {
  props: ["logoWhite"],
  components: {
    Banner,
  },
};
</script>