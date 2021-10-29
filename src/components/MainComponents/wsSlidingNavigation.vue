<template>
<div>
  <div class="wsSliderNavigation-wrapper m-0 p-0 ml-auto mr-auto fadeIn">
    <div class="wsSliderNavigation-main fadeIn">
      <div
        class="d-flex flex-column justify-content-center fadeIn" style="height: 80px"
        @click="backHome"
        v-if="!isAtHome"
      >
        <font-awesome-icon :icon="house" class="fa-house ml-3 mr-2 fadeIn" />
      </div>
      <div
        class="d-flex flex-column justify-content-center m-0 p-0 fadeIn"
        v-if="isAtHome"
      >
        <font-awesome-icon :icon="arrow" class="fa-arrow ml-3 mr-2 fadeIn" />
      </div>
      <div
        v-for="(service, index) in wsServices"
        :key="index"
        :id="service.serviceId"
        @click="goTo((value = service.target), (path = service.path))"
        class="wsSliderNavigation-main__item fadeIn"
      >
        <b-img-lazy :src="service.imageUrl" :class="service.imageClass" :alt="service.imageAlt" />
        <p class="wsSliderNavigation-main__item--name fadeIn">
          {{ service.serviceName }}
        </p>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  mixins: ["baseMixin", "navigationBarMixin"],
  methods: {
    goTo(value, path) {
      if (this.$router.currentRoute.path !== path) {
        this.$router.push(value);
        this.isAtHome = false;
      }
    },
  },
};
</script>