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
      title: "Hairstyling",
      meta: [
        {
          name: "description",
          content: "At Wonderlust Studio we celebrate women and men in their real, most raw, authentic brilliance, who believe in themselves and are ready to step into the look they love. We carefully choosing our hair products, because we believe that from a good treatment you should never expect less.",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Hairstyling",
        },
        {
          property: "og:description",
          content: "At Wonderlust Studio we celebrate women and men in their real, most raw, authentic brilliance, who believe in themselves and are ready to step into the look they love. We carefully choosing our hair products, because we believe that from a good treatment you should never expect less.",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Hair",
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