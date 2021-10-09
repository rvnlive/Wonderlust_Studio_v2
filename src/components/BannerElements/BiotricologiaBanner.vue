<template>
  <div class="wsBanner wsBanner--biotricologia" v-touch:swipe.top="open">
    <wsLoading v-if="isLoading" />
    <span v-else v-touch:swipe.left="toLeft" v-touch:swipe.right="toRight">
      <div
        class="wsBanner__header wsBanner__background--biotricologia"
        aria-label="A woman with hair mask on her scalp, during biotricologia treatment."
      >
        <div
          class="wsBanner__watermark--light"
          data-sectionName="#Biotricologia"
        ></div>
        <b-img
          :src="logoWhite"
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