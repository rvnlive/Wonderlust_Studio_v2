<template>
  <div>
    <b-container fluid class="m-0 mt-4 p-0">
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
};
</script>