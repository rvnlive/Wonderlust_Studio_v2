<template>
  <div>
    <div class="mb-5">
      <Hair v-if="this.viewRoutes.hair" />
      <Aesthetic v-if="this.viewRoutes.aesthetic" />
      <Biotricologia v-if="this.viewRoutes.biotricologia" />
      <BrowLash v-if="this.viewRoutes.browlash" />
      <Nail v-if="this.viewRoutes.nail" />
      <Facial v-if="this.viewRoutes.facial" />
    </div>
    <Footer />
  </div>
</template>
<script>
export default {
  mixins: ["baseMixin"],
  components: {
    Footer: () => import("../MainElements/wsFooter.vue"),
    Hair: () =>
      import(/* webpackPrefetch: true */ "./BannerSections/HairSection.vue"),
    Aesthetic: () =>
      import(
        /* webpackPrefetch: true */ "./BannerSections/AestheticSection.vue"
      ),
    Biotricologia: () =>
      import(
        /* webpackPrefetch: true */ "./BannerSections/BiotricologiaSection.vue"
      ),
    BrowLash: () =>
      import(
        /* webpackPrefetch: true */ "./BannerSections/BrowLashSection.vue"
      ),
    Nail: () =>
      import(/* webpackPrefetch: true */ "./BannerSections/NailSection.vue"),
    Facial: () =>
      import(/* webpackPrefetch: true */ "./BannerSections/FacialSection.vue"),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>