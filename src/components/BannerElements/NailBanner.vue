<template>
  <div class="wsBanner wsBanner--nail">
    <span v-touch:swipe.left="toLeft" v-touch:swipe.right="toRight">
      <div class="wsBanner__header wsBanner__background--nail">
        <div class="wsBanner__watermark--dark" data-sectionName="#Nails"></div>
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
        <span class="pulse-ring--dark">Details</span>
      </button>
      <button
        v-b-toggle.main-collapse
        variant="transparent"
        class="w-100 pt-2 bg-transparent border-0"
        @click="collapseClosed()"
        v-else
      >
        <span class="pulse-ring--dark">Close Details</span>
      </button>
      <hr class="bg-light mt-5 embossed--dark" />
      <!-- <banner-element :isDetailsVisible="isDetailsVisible" /> -->
    </b-container>
  </div>
</template>

<script>
// Page Elements
// const BannerElement = () => ({
//   component: import(
//     /* webpackPrefetch: true */ "../SectionElements/AestheticSectionElements.vue"
//   ),
// });

export default {
  props: ["logoBlack"],
  mixins: ["baseMixin"],
  components: {
    // BannerElement,
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