<template>
  <div class="m-0 p-0">
    <b-col
      class="wsImage-wrapper mb-4"
      v-for="(service, index) of wsHair"
      :key="index"
    >
      <b-img-lazy
        class="wsImage"
        :src="service.image"
        :alt="service.alt"
      />
      <div class="wsImage-description-layer">
        <p>{{ service.message }}</p>
        <div class="wsButton pl-3 pr-3 pt-1 pb-1 text-dark">{{
          service.button
        }}</div>
      </div>
    </b-col>
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