<template>
  <b-collapse id="main-collapse" class="mt-2" v-if="isDetailsVisible">
    <div class="mt-5 mb-5">
      <Section />
    </div>
    <Footer />
  </b-collapse>
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
  methods: {
  },
};
</script>