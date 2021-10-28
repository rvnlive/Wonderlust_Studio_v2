<template>
  <div class="wsGallery-wrapper">
    <div class="wsFlipCard" v-for="(service, index) of this.relevantImages" :key="index">
      <div class="wsFlipCard-inner">
        <b-img-lazy
          class="wsFlipCard-front slideFromBottom"
          :src="service.image"
          :alt="service.alt"
        />
        <div class="wsFlipCard-back pl-3 pr-3">
          <p class="font-neumorph">{{ service.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mixins: ["serviceImagesMixin"],
  components: {},
  data() {
    return {};
  },
};
</script>