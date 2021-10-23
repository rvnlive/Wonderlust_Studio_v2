<template>
  <b-container fluid class="m-0 mt-4 p-0">
    <b-img class="wsLogo--top-left" :src="logoBlack" alt="Wonderlust Studio" />
    <wsFooter style="position: fixed" />
  </b-container>
</template>
<script>
export default {
  mixins: ["baseMixin"],
  data() {
    return {};
  },
  mounted() {
    this.isAtHome = true
    this.resetPageActive();
  },
};
</script>