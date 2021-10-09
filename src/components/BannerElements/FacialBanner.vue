<template>
  <div class="wsBanner wsBanner--facial" v-touch:swipe.top="open">
    <wsLoading v-if="isLoading" />
    <span v-else v-touch:swipe.right="toRight" v-touch:swipe.left="toLeft">
      <div
        class="wsBanner__header wsBanner__background--facial"
        aria-label="A woman with needles near her face, before aesthetic therapy."
      >
        <div
          class="wsBanner__watermark--light"
          data-sectionName="#Facials"
        ></div>
        <b-img
          :src="logoWhite"
          alt="Wonderlust Studio"
          class="wsBanner__logo wsBanner__will-animate"
        />
      </div>
    </span>
    <wsNavigationPlaceholders />
    <wsNavigationDirectionTip />
    <wsBottomSheet v-model="isDetailsVisible">
      <wsBannerElement v-if="isDetailsVisible === true" />
    </wsBottomSheet>
  </div>
</template>

<script>
export default {
  props: ["logoWhite"],
  mixins: ["baseMixin"],
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>