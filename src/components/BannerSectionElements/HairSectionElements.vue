<template>
  <!-- <b-collapse id="main-collapse" class="bg-white" v-if="isDetailsVisible"> -->
    <div>
    <div class="mb-5">
      <Section />
    </div>
    <Footer />
    <ScrollToTop />
    </div>
  <!-- </b-collapse> -->
</template>
<script>
import Footer from "../MainElements/Footer.vue";
import Section from "./BannerSections/HairSection.vue";
import ScrollToTop from "../../Helpers/ScrollToTop.vue"
export default {
  props: ["isDetailsVisible"],
  components: {
    Footer,
    Section,
    ScrollToTop
  },
  data() {
    return {};
  },
  methods: {},
};
</script>