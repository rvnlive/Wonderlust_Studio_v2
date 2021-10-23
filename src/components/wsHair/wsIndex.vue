<template>
  <div>
    <!-- <div class="wsBanner">
      <b-img :src="banner" class="wsBanner-image slideFromTop" />
    </div> -->
    <div class="wsSection slideFromBottom">
      <gallery />
    </div>
    <wsFooter style="position: static; margin: 1.5em auto 3em auto" />
  </div>
</template>

<script>
import banner from "../../assets/img/model_img/1.jpg";
export default {
  mixins: ["baseMixin", "componentMixin"],
  components: {
    gallery: () => import("./SubMenu/wsHighligthsGallery.vue"),
  },
  data() {
    return {
      banner: banner
    };
  },
  computed: {},
  methods: {},
  mounted() {
  },
};
</script>