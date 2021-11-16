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
          content:
            "Welcome to Wonderlust Studio. We are located in the heart of Warrington. Whether you want to get a simple, classic hair cut or you want to get your own personalized look, We are here for you. We do offer a range of services starting from hair styling, hair coloring, permanent eyebrows, brow tint/henna, eyelash lifting, nail extentions to skincare, mesotherapy, aesthetic treatments, hair and scalp treatments, but the list still goes on. Visit our salon because the greatest gift you can give yourself is a little bit of your own attention. Be-You-tiful!",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Homepage",
        },
        {
          property: "og:description",
          content:
            "Welcome to Wonderlust Studio. We are located in the heart of Warrington. Whether you want to get a simple, classic hair cut or you want to get your own personalized look, We are here for you. We do offer a range of services starting from hair styling, hair coloring, permanent eyebrows, brow tint/henna, eyelash lifting, nail extentions to skincare, mesotherapy, aesthetic treatments, hair and scalp treatments, but the list still goes on. Visit our salon because the greatest gift you can give yourself is a little bit of your own attention. Be-You-tiful!",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Home",
        },
        {
          property: "og:type",
          content: "website",
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