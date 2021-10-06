<template>
  <div class="wsBanner wsBanner--nail">
    <wsLoading v-if="isLoading" />
    <span
      v-else
      v-touch:swipe.left="toLeft"
      v-touch:swipe.right="toRight"
      v-touch:swipe.top="open"
    >
      <div
        class="wsBanner__header wsBanner__background--nail"
        aria-label="A woman with needles near her face, before aesthetic therapy."
      >
        <div class="wsBanner__watermark--dark" data-sectionName="#Nails"></div>
        <b-img
          :src="logoBlack"
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
  props: ["logoBlack"],
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