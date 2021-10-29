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
      title: "Aesthetics",
      meta: [
        {
          name: "description",
          content: "Aesthetic treatment at Wonderlust Studio.",
        },
        {
          property: "og:description",
          content: "Aesthetic treatment at Wonderlust Studio.",
        },
      ],
    };
  },
  mounted() {
    this.isAtHome = false;
  },
};
</script>