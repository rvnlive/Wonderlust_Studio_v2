<template>
  <b-container class="wsServicePage m-0 mt-4 p-0">
    <b-img class="wsLogo--top-left" :src="logoBlack" />
    <wsFooter style="top: calc(100vh - 75vh)" />
  </b-container>
</template>
<script>
export default {
  mixins: ["baseMixin"],
  data() {
    return {};
  },
  mounted() {
    this.resetPageActive()
  },
};
</script>