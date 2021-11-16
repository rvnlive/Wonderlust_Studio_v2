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
      title: "Nails",
      meta: [
        {
          name: "description",
          content: "At Wonderlust Studio, we will take care of your hands and feet. Forget about brittle and weak nails. Give yourself some pleasure - and get yourself long nails, or just a manicure. Thanks to nourishing treatments, we will restore your nails to their beautiful appearance!",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Nails",
        },
        {
          property: "og:description",
          content: "At Wonderlust Studio, we will take care of your hands and feet. Forget about brittle and weak nails. Give yourself some pleasure - and get yourself long nails, or just a manicure. Thanks to nourishing treatments, we will restore your nails to their beautiful appearance!",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Nail",
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