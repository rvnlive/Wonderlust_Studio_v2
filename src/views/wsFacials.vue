<template>
  <div>
    <wsLoading v-if="isLoading" class="wsServicePage mt-5" />
    <wsTabSection v-else />
  </div>
</template>
<script>
export default {
  mixins: ["componentMixin"],
  metaInfo() {
    return {
      title: "Facials",
      meta: [
        {
          name: "description",
          content: "Facial treatments at Wonderlust Studio.",
        },
        {
          property: "og:description",
          content: "Facial treatments at Wonderlust Studio.",
        },
      ],
    };
  },
  mounted() {
    this.isAtHome = false;
  },
};
</script>