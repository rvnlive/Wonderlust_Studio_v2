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
          content: "At Wonderlust Studio every aesthetic procedure / treatment is non-surgical and doctor-led, using only the very best certified products to get the results you’re looking for..",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Aesthetics",
        },
        {
          property: "og:description",
          content: "At Wonderlust Studio every aesthetic procedure / treatment is non-surgical and doctor-led, using only the very best certified products to get the results you’re looking for.",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Aesthetic",
        },
        {
          property: "og:type",
          content: "website",
        },
      ],
    };
  },
  mounted() {
    this.isAtHome = false;
  },
};
</script>