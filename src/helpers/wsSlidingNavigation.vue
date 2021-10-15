<template>
  <b-container fluid class="wsSliderNavigation-wrapper m-0 p-0 fadeIn">
    <div class="wsSliderNavigation-main fadeIn">
      <div
        class="d-flex flex-column justify-content-center m-0 p-0 fadeIn"
        @click="backHome"
        v-if="!isAtHome"
      >
        <font-awesome-icon :icon="house" class="fa-arrow ml-4 mr-3 fadeIn" />
      </div>
      <div
        class="d-flex flex-column justify-content-center m-0 p-0 fadeIn"
        v-if="isAtHome"
      >
        <font-awesome-icon :icon="arrow" class="fa-arrow ml-3 mr-3 fadeIn" />
      </div>
      <div
        v-for="(service, index) in wsServices"
        :key="index"
        :id="service.serviceId"
        @click="goTo((value = service.target))"
        class="wsSliderNavigation-main__item fadeIn"
      >
        <b-img-lazy :src="service.imageUrl" :class="service.imageClass" />
        <p class="wsSliderNavigation-main__item--name fadeIn">
          {{ service.serviceName }}
        </p>
      </div>
    </div>
  </b-container>
</template>
<script>
export default {
  mixins: ["baseMixin", "serviceMixin"],
  data() {
    return {};
  },
  methods: {
    goTo(value) {
      if (this.$router.currentRoute.path !== value) {
        this.$router.push(value);
        this.isAtHome = false;
      }
    },
  },
  mounted() {
    let sliderWrap = document.querySelector(".wsSliderNavigation-wrapper");
    let slider = document.querySelector(".wsSliderNavigation-main");

    function getScrollPosition() {
      return window.scrollY;
    }

    let scrollPosition;
    let sliderWidth;
    function scrollUpdate() {
      if (window.innerWidth > 760) {
        sliderWrap.style.overflowX = "hidden";
        scrollPosition = getScrollPosition();
        if (scrollPosition >= sliderWidth) {
          window.scrollTo({ top: 1 });
        } else if (scrollPosition <= 0) {
          window.scrollTo({ top: sliderWidth - 1 });
        }
        slider.style.transform = `translateX(${-window.scrollY}px)`;
        requestAnimationFrame(scrollUpdate);
      } else {
        sliderWrap.style.overflowX = "scroll";
      }
    }

    function calculateDimension() {
      sliderWidth = slider.getBoundingClientRect().width;
    }

    function onLoad() {
      calculateDimension();
      window.scrollTo({ top: 1 });
      scrollUpdate();
    }

    onLoad();
  },
};
</script>