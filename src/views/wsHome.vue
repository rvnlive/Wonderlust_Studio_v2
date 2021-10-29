<template>
  <b-container fluid class="m-0 mt-4 p-0">
    <wsLoading v-if="isLoading" class="wsServicePage mt-5" />
    <b-img
      v-else
      class="wsLogo--bottom-right"
      :src="logoBlack"
      alt="Wonderlust Studio"
    />
    <wsFooter style="position: fixed" />
  </b-container>
</template>
<script>
export default {
  mixins: ["baseMixin"],
  metaInfo() {
    return {
      title: "Homepage",
      meta: [
        {
          name: "description",
          content: "Welcome to Wonderlust Studio. We are a hair and beauty salon, located in the heart of Warrington, UK.",
        },
        {
          property: "og:description",
          content: "Welcome to Wonderlust Studio. We are a hair and beauty salon, located in the heart of Warrington, UK.",
        },
      ],
    };
  },
  mounted() {
    this.isAtHome = true;
    this.resetPageActive();
  },
};
</script>