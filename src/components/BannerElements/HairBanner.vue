<template>
  <div class="wsBanner wsBanner--hair">
    <span v-touch:swipe.left="toLeft">
      <div
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
      </div>
    </span>
    <NavPlaceholders />
    <b-container fluid class="wsBanner__body m-0 p-0">
      <button
        @click="open"
        variant="transparent"
        class="bg-transparent border-0"
      >
        <span class="pulse-ring--light">Show Details</span>
      </button>
    </b-container>
    <vue-bottom-sheet ref="visibleDetails" max-height="90%" @opened="smooth">
      <BannerElement />
    </vue-bottom-sheet>
  </div>
</template>

<script>
const BannerElement = () => ({
  component: import(
    /* webpackPrefetch: true */ "../BannerSectionElements/HairSectionElements.vue"
  ),
});
import NavPlaceholders from "../MainElements/NavPlaceholders.vue";

export default {
  props: ["logoBlack"],
  mixins: ["baseMixin"],
  components: {
    BannerElement,
    NavPlaceholders,
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