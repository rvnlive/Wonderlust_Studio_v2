<template>
  <b-container fluid class="wsSliderNavigation-wrapper m-0 p-0 mb-2">
    <div class="wsSliderNavigation-main">
      <div
        class="
          wsSliderNavigation-main__item
          d-flex
          flex-column
          justify-content-center
          m-0
          p-0
        "
      >
        <font-awesome-icon
          :icon="arrow"
          class="fa-arrow ml-3 mr-3"
          v-show="!animated"
        />
      </div>
      <div
        v-for="(service, index) in wsServices"
        :key="index"
        class="wsSliderNavigation-main__item"
      >
        <b-img :src="service.imageUrl" :class="service.imageClass" />
        <p :class="service.nameClass">{{ service.serviceName }}</p>
      </div>
    </div>
  </b-container>
</template>
<script>
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";
export default {
  mixins: ["baseMixin", "imageMixin"],
  data() {
    return {
      wsServices: [
        {
          imageUrl: require("../assets/img/model_img/navigation/1.jpg"),
          imageClass: "wsSliderNavigation-main__item--hair",
          nameClass: "wsSliderNavigation-main__item--name",
          serviceName: "Hairstyling"
        },
        {
          imageUrl: require("../assets/img/model_img/navigation/2.jpg"),
          imageClass: "wsSliderNavigation-main__item--aesthetic",
          nameClass: "wsSliderNavigation-main__item--name",
          serviceName: "Aesthetics"
        },
        {
          imageUrl: require("../assets/img/model_img/navigation/3.jpg"),
          imageClass: "wsSliderNavigation-main__item--biotricologia",
          nameClass: "wsSliderNavigation-main__item--name",
          serviceName: "Biotricologia"
        },
        {
          imageUrl: require("../assets/img/model_img/navigation/4.jpg"),
          imageClass: "wsSliderNavigation-main__item--browlash",
          nameClass: "wsSliderNavigation-main__item--name",
          serviceName: "Brows & Lashes"
        },
        {
          imageUrl: require("../assets/img/model_img/navigation/5.jpg"),
          imageClass: "wsSliderNavigation-main__item--nail",
          nameClass: "wsSliderNavigation-main__item--name",
          serviceName: "Nails"
        },
        {
          imageUrl: require("../assets/img/model_img/navigation/6.jpg"),
          imageClass: "wsSliderNavigation-main__item--facial",
          nameClass: "wsSliderNavigation-main__item--name",
          serviceName: "Facials"
        },
      ],
      arrow: faArrowsAltH,
      isActive: false,
      animated: false,
    };
  },
  props: {},
  method: {},
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