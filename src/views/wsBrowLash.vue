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
      title: "Brows & LVL Lashes",
      meta: [
        {
          name: "description",
          content: "At Wonderlust Studio, we offer a whole range of services to have your eyes looking stunning. Waxing, tinting or henna for those perfect brows. Or Permanent eyebrows - the most popular treatment of all time!  Thanks to this treatment, you will be able to enjoy your eyebrows at any time of the day! And! We also offer a lash treatment - LVL lash lift - of your own lashes to make them look so nice and lifted! Don't hesitate, book an appointment!",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Brows & LVL Lashes",
        },
        {
          property: "og:description",
          content: "At Wonderlust Studio, we offer a whole range of services to have your eyes looking stunning. Waxing, tinting or henna for those perfect brows. Or Permanent eyebrows - the most popular treatment of all time!  Thanks to this treatment, you will be able to enjoy your eyebrows at any time of the day! And! We also offer a lash treatment - LVL lash lift - of your own lashes to make them look so nice and lifted! Don't hesitate, book an appointment!",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Browlash",
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