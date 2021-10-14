<template>
  <div class="m-0 p-0 mt-4">
    <span>
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
        <b-img-lazy
          :src="logoBlack"
          alt="Wonderlust Studio"
          class="wsLogo wsBanner__will-animate"
        />
      </div>
    </span>
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