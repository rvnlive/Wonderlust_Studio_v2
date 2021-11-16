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
      title: "Biotricologia",
      meta: [
        {
          name: "description",
          content: "At Wonderlust Studio we know, that the health of the skin of the scalp is key to prolong youth and beauty of hair. This is why we offer the Biotricologia treatment. This treatment acts on the living part of hair, focusing on the hair follicle and the skin layer that forms the scalp. Visit our salon or book a consultation for more information.",
        },
        // OpenGraph
        {
          property: "og:title",
          content: "Biotricologia",
        },
        {
          property: "og:description",
          content: "At Wonderlust Studio we know, that the health of the skin of the scalp is key to prolong youth and beauty of hair. This is why we offer the Biotricologia treatment. This treatment acts on the living part of hair, focusing on the hair follicle and the skin layer that forms the scalp. Visit our salon or book a consultation for more information.",
        },
        {
          property: "og:image",
          content: require("../assets/img/ws_brand/social_preview.webp"),
        },
        {
          property: "og:url",
          content: "https://wonderluststudio.co.uk/Biotricologia",
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