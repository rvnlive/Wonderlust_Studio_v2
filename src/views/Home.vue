<template>
  <div>
    <div class="section w-100">
      <Banner />
    </div>
    <div class="section w-100">
      <AboutSection />
      <ExampleSection />
    </div>
    <div class="section"></div>
  </div>
</template>
<script>
import Banner from "../components/HomeElements/Banner.vue";
import AboutSection from "../components/HomeElements/AboutSection.vue";
import ExampleSection from "../components/HomeElements/ExampleSection.vue";
export default {
  components: {
    Banner,
    AboutSection,
    ExampleSection,
  },
  data() {
    return {};
  },
};
</script>