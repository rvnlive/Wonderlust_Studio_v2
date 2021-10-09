<template>
  <b-container fluid class="wsSliderNavigation-wrapper m-0 p-0 mb-2">
    <!-- <wsLoading v-if="isLoading" /> -->
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
      <div class="wsSliderNavigation-main__item">
        <div class="wsSliderNavigation-main__item--hair" />
        <p class="wsSliderNavigation-main__item--name">#Hairstyling</p>
      </div>
      <div class="wsSliderNavigation-main__item">
        <div class="wsSliderNavigation-main__item--aesthetic" />
      </div>
      <div class="wsSliderNavigation-main__item">
        <div class="wsSliderNavigation-main__item--biotricologia" />
      </div>
      <div class="wsSliderNavigation-main__item">
        <div class="wsSliderNavigation-main__item--browlash" />
      </div>
      <div class="wsSliderNavigation-main__item">
        <div class="wsSliderNavigation-main__item--nail" />
      </div>
      <div class="wsSliderNavigation-main__item">
        <div class="wsSliderNavigation-main__item--facial" />
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
      arrow: faArrowsAltH,
      isActive: false,
      animated: false,
    };
  },
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
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body::-webkit-scrollbar {
  display: none;
}

.wsSliderNavigation-wrapper {
  width: 100%;
  height: 8em;
  overflow-x: hidden;
  .wsSliderNavigation-main {
    height: 100%;
    width: 52.5em;
    display: flex;
    will-change: transform;
    overflow-x: hidden;
    &__item {
      padding-top: 1em;
      overflow-x: hidden;
      &--hair {
        top: 0.5em;
        left: 10px;
        margin-left: 0.75em;
        margin-right: 2.5em;
        width: 5em;
        height: 5em;
        background: url("~../assets/img/model_img/navigation/1.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #e0e0e0;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
      }
      &--aesthetic {
        top: 0.5em;
        margin-left: 2.5em;
        margin-right: 2.5em;
        width: 5em;
        height: 5em;
        background: url("~../assets/img/model_img/navigation/2.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #e0e0e0;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
      }
      &--biotricologia {
        top: 0.5em;
        margin-left: 2.5em;
        margin-right: 2.5em;
        width: 5em;
        height: 5em;
        background: url("~../assets/img/model_img/navigation/3.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #e0e0e0;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
      }
      &--browlash {
        top: 0.5em;
        margin-left: 2.5em;
        margin-right: 2.5em;
        width: 5em;
        height: 5em;
        background: url("~../assets/img/model_img/navigation/4.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #e0e0e0;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
      }
      &--nail {
        top: 0.5em;
        margin-left: 2.5em;
        margin-right: 2.5em;
        width: 5em;
        height: 5em;
        background: url("~../assets/img/model_img/navigation/5.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #e0e0e0;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
      }
      &--facial {
        top: 0.5em;
        margin-left: 2.5em;
        margin-right: 2.5em;
        width: 5em;
        height: 5em;
        background: url("~../assets/img/model_img/navigation/6.jpg");
        background-size: cover;
        background-position: center;
        border: 2px solid #e0e0e0;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff;
      }
      &--name {
        display: none;
        text-align: center;
        margin-left: -15px;
        margin-top: 4px;
      }
      &:hover {
        &--name {
          display: block;
          text-align: center;
          margin-top: 4px;
        }
      }
    }
  }
  .wsNavigation-back {
    margin-left: 10px;
    margin-bottom: -50px;
    padding-top: 30px;
  }
  .active {
    top: 1em;
    box-shadow: -5px -5px 10px #a8a8a8, 5px 5px 10px #ffffff;
  }
}
.fa-arrow {
  font-size: 20px;
  margin-top: -10px;
  color: #989898;
//   transform: translateX(-50px);
}
</style>
