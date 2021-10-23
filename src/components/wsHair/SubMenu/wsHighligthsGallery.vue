<template>
  <div class="wsGallery-wrapper">
    <div
      class="wsFlipCard"
      v-for="(service, index) of wsHair"
      :key="index"
    >
      <div class="wsFlipCard-inner">
        <b-img
          class="wsFlipCard-front slideFromBottom"
          :src="service.image"
          :alt="service.alt"
        />
        <div class="wsFlipCard-back pl-3 pr-3">
          <p class="font-neumorph">{{ service.message }}</p>
          <div class="wsButton pl-3 pr-3 pt-1 pb-1 font-grey">
            {{ service.button }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mixins: ["baseMixin", "imageMixin"],
  components: {},
  data() {
    return {};
  },
};
</script>