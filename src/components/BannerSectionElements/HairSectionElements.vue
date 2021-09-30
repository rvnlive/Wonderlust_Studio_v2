<template>
  <div>
    <div class="mb-5">
      <Section />
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../MainElements/Footer.vue";
import Section from "./BannerSections/HairSection.vue";
export default {
  props: ["isDetailsVisible"],
  components: {
    Footer,
    Section,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>