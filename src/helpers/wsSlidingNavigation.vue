<template>
  <b-container fluid class="wsSliderNavigation-wrapper m-0 p-0">
    <div class="wsSliderNavigation-main">
      <div class="d-flex flex-column justify-content-center m-0 p-0">
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
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
export default {
  mixins: ["baseMixin"],
  data() {
    return {
      wsServices: [
        {
          target: "/Hair",
          imageUrl: require("../assets/img/model_img/navigation/1.jpg"),
          imageClass: "wsSliderNavigation-main__item--hair fadeIn",
          serviceName: "Hairstyling",
          serviceId: "Hair",
        },
        {
          target: "/Aesthetic",
          imageUrl: require("../assets/img/model_img/navigation/2.jpg"),
          imageClass: "wsSliderNavigation-main__item--aesthetic fadeIn",
          serviceName: "Aesthetics",
          serviceId: "Aesthetic",
        },
        {
          target: "/Biotricologia",
          imageUrl: require("../assets/img/model_img/navigation/3.jpg"),
          imageClass: "wsSliderNavigation-main__item--biotricologia",
          serviceName: "Biotricologia",
          serviceId: "Biotricologia",
        },
        {
          target: "/Browlash",
          imageUrl: require("../assets/img/model_img/navigation/4.jpg"),
          imageClass: "wsSliderNavigation-main__item--browlash",
          serviceName: "Brows & Lashes",
          serviceId: "BrowLash",
        },
        {
          target: "/Nail",
          imageUrl: require("../assets/img/model_img/navigation/5.jpg"),
          imageClass: "wsSliderNavigation-main__item--nail",
          serviceName: "Nails",
          serviceId: "Nail",
        },
        {
          target: "/Facial",
          imageUrl: require("../assets/img/model_img/navigation/6.jpg"),
          imageClass: "wsSliderNavigation-main__item--facial",
          serviceName: "Facials",
          serviceId: "Facial",
        },
      ],
      arrow: faArrowsAltH,
    };
  },
  props: {},
  methods: {
    goTo(value) {
      if (this.$router.currentRoute.path !== value) {
        this.$router.push(value);
      }
    },
  },
  mounted() {
    let sliderWrap = document.querySelector(".wsSliderNavigation-wrapper");
    let slider = document.querySelector(".wsSliderNavigation-main");
    let clonesWidth;
    let sliderWidth;
    let scrollPosition;

    function getScrollPosition() {
      return window.scrollY;
    }

    function scrollUpdate() {
      if (window.innerWidth > 760) {
        sliderWrap.style.overflowX = "hidden";
        scrollPosition = getScrollPosition();
        if (clonesWidth + scrollPosition >= sliderWidth) {
          window.scrollTo({ top: 1 });
        } else if (scrollPosition <= 0) {
          window.scrollTo({ top: sliderWidth - clonesWidth - 1 });
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
      //   document.body.style.height = `${sliderWidth}px`;
      window.scrollTo({ top: 1 });
      scrollUpdate();
    }

    onLoad();
  },
};
</script>