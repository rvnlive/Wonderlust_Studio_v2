<template>
  <div class="m-0 p-0">
    <div class="wsFlipCard" v-for="(service, index) of wsHair" :key="index">
      <div class="wsFlipCard-inner">
        <b-img-lazy
          class="wsFlipCard-front"
          :src="service.image"
          :alt="service.alt"
        />
        <div class="wsFlipCard-back pl-3 pr-3">
          <p>{{ service.message }}</p>
          <div class="wsButton pl-3 pr-3 pt-1 pb-1 text-dark">
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