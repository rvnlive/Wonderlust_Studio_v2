<template>
  <div>
    <about />
    <gallery />
    <wsFooter />
  </div>
</template>

<script>
export default {
  mixins: ["baseMixin"],
  components: {
    about: () => import("./About.vue"),
    gallery: () => import("./Gallery.vue")
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>