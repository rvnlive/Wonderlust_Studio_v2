<template>
  <div>
    <div class="section w-100">
      <Banner />
    </div>
    <div class="">
      <AboutSection />
    </div>
    <div class="section"></div>
  </div>
</template>
<script>
import Banner from "../components/HomeElements/Banner.vue";
import AboutSection from "../components/HomeElements/AboutSection.vue";
export default {
  components: {
    Banner,
    AboutSection,
  },
  data() {
    return {};
  },
};
</script>