<template>
  <div>
    <div class="wsBanner">
      <b-img :src="banner" class="wsBanner-image slideFromTop" />
      <!-- <p class="h4 font-weight-light wsWatermark font-grey">#Hairstyling</p> -->
    </div>
    <div class="wsSection slideFromBottom">
      <about />
      <gallery />
      <wsFooter />
    </div>
  </div>
</template>

<script>
import banner from "../../assets/img/model_img/1.jpg";
export default {
  mixins: ["baseMixin"],
  components: {
    about: () => import("./About.vue"),
    gallery: () => import("./Gallery.vue"),
  },
  data() {
    return {
      banner: banner,
    };
  },
  computed: {},
  methods: {},
  mounted() {},
};
</script>