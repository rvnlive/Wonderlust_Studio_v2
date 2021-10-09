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
      import(/* webpackPrefetch: true */ "./BannerSections/HairBottomSheet/wsIndex.vue"),
    Aesthetic: () =>
      import(
        /* webpackPrefetch: true */ "./BannerSections/AestheticBottomSheet/wsIndex.vue"
      ),
    Biotricologia: () =>
      import(
        /* webpackPrefetch: true */ "./BannerSections/BiotricologiaBottomSheet/wsIndex.vue"
      ),
    BrowLash: () =>
      import(
        /* webpackPrefetch: true */ "./BannerSections/BrowLashBottomSheet/wsIndex.vue"
      ),
    Nail: () =>
      import(/* webpackPrefetch: true */ "./BannerSections/NailBottomSheet/wsIndex.vue"),
    Facial: () =>
      import(/* webpackPrefetch: true */ "./BannerSections/FacialBottomSheet/wsIndex.vue"),
  },
  data() {
    return {};
  },
  methods: {},
};
</script>