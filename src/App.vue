<template>
  <div id="app">
    <Navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/MainElements/Navigation.vue";
import Footer from "./components/MainElements/Footer.vue";
export default {
  name: "App",
  components: {
    Navigation,
    Footer,
  },
};
</script>
