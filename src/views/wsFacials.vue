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
          content: "At Wonderlust Studio, we will take care of the appearance of your face and skin. Thanks to us, you will be able to take better care of your external beauty. We select individually the treatments for you and offer you home care products too. The result of our treatments: your face will regain its glow!",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Facials",
        },
        {
          property: "og:description",
          content: "At Wonderlust Studio, we will take care of the appearance of your face and skin. Thanks to us, you will be able to take better care of your external beauty. We select individually the treatments for you and offer you home care products too. The result of our treatments: your face will regain its glow!",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Facial",
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