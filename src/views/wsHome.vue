<template>
  <div>
    <b-container fluid class="wsWrapper p-0 m-0 pt-3">
      <b-img class="wsLogo" :src="logoBlack" />
    </b-container>
  </div>
</template>
<script>
export default {
  props: ["logoBlack"],
  mixins: ["baseMixin"],
  data() {
    return {};
  },
  //   methods: {
  //     fadeIn() {
  //       document.body.style.opacity = "1";
  //     },
  //   },
  //   mounted() {
  //     this.fadeIn();
  //   },
};
</script>