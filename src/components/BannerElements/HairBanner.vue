<template>
  <div class="wsBanner wsBanner--hair" v-touch:swipe.top="open">
    <span v-touch:swipe.left="toLeft" v-touch:swipe.right="toRight">
      <wsLoading v-if="isLoading" />
      <div
        v-else
        class="wsBanner__header wsBanner__background--hair"
        aria-label="Girl with a white hair, shaped eyebrows and lifted lashes."
      >
        <div
          class="wsBanner__watermark--dark"
          data-sectionName="#HairStyling"
        ></div>
        <b-img
          :src="logoBlack"
          alt="Wonderlust Studio"
          class="wsBanner__logo wsBanner__will-animate"
        />
        <wsNavigationPlaceholders />
        <wsNavigationDirectionTip />
      </div>
    </span>

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