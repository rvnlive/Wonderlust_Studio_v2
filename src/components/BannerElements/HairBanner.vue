<template>
  <div class="wsBanner wsBanner--hair">
    <span v-touch:swipe.left="toLeft">
      <div
        class="wsBanner__header wsBanner__background--hair"
        aria-label="Girl with a white hair, shaped eyebrows and lifted lashes."
      >
        <div class="wsBanner__watermark--dark" data-sectionName="#HairStyling"></div>
        <b-img
          :src="logoBlack"
          alt="Wonderlust Studio"
          class="wsBanner__logo wsBanner__will-animate"
        />
      </div>
    </span>
    <b-container fluid class="wsBanner__body">
      <button
        v-b-toggle.main-collapse
        variant="transparent"
        class="w-100 pt-2 bg-transparent border-0"
        @click="
          collapseOpen();
          scrollTo();
        "
        v-if="isDetailsVisible === false"
      >
        <span class="pulse-ring--light">Show Details</span>
      </button>
      <button
        v-b-toggle.main-collapse
        variant="transparent"
        class="w-100 pt-2 bg-transparent border-0"
        @click="collapseClosed()"
        v-else
      >
        <span class="pulse-ring--light">Hide Details</span>
      </button>
      <hr class="bg-light mt-5 embossed--dark" />
      <BannerElement :isDetailsVisible="isDetailsVisible" />
    </b-container>
  </div>
</template>

<script>
const BannerElement = () => ({
  component: import(
    /* webpackPrefetch: true */ "../BannerSectionElements/HairSectionElements.vue"
  ),
});

export default {
  props: ["logoBlack"],
  mixins: ["baseMixin"],
  components: {
    BannerElement,
  },
  data() {
    return {
      isDetailsVisible: false,
    };
  },
  methods: {},
  mounted() {},
};
</script>