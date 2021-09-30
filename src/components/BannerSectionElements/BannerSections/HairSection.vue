<template>
  <b-container fluid class="m-0 p-0">
    <hr class="bg-secondary w-75 m-0 ml-auto mr-auto mb-4" />
    <b-row
      class="m-0 p-0"
      v-for="(services, index) in Services[0]"
      :key="index"
    >
      <b-col
        sm="4"
        class="img-wrapper m-0 p-0 mb-4 ml-auto mr-auto"
        v-for="(service, index) of services"
        :key="index"
      >
        <b-img-lazy
          class="img w-100 h-100"
          :src="service.image"
          :alt="service.alt"
        />
        <div class="img-description-layer d-flex flex-column">
          <p>{{ service.message }}</p>
          <b-button variant="secondary">{{ service.button }}</b-button>
        </div>
      </b-col>
    </b-row>
    <b-row
      class="m-0 p-0"
      v-for="(services, index) in Services[1]"
      :key="index"
    >
      <b-col
        sm="4"
        class="img-wrapper m-0 p-0 mb-4 ml-auto mr-auto"
        align-self="stretch"
        v-for="(service, index) of services"
        :key="index"
      >
        <b-img-lazy class="img w-100" :src="service.image" :alt="service.alt" />
        <div class="img-description-layer d-flex flex-column">
          <p>{{ service.message }}</p>
          <b-button>{{ service.button }}</b-button>
        </div>
      </b-col>
    </b-row>
    <ScrollToTop />
  </b-container>
</template>
<script>
import TestImage from "../../../assets/img/test_images/test_image_1.jpg";
import BrowExample from "../../../assets/img/service_examples/brow_example.png";
import LashExample from "../../../assets/img/service_examples/lashlift_example.jpg";
import ScrollToTop from "../../../Helpers/ScrollToTop.vue";
export default {
  components: {
    ScrollToTop,
  },
  data() {
    return {
      Services: [
        {
          Row1: [
            {
              image: BrowExample,
              alt: "Face of a girl with shaped eyebrows",
              message: "Test Text Content",
              button: "More Brows & Lashes",
            },
            {
              image: LashExample,
              alt: "Face of a girl with shaped eyebrows",
              message: "Test Text Content",
              button: "More Brows",
            },
            {
              image: TestImage,
              alt: "Face of a girl with shaped eyebrows",
              message: "Test Text Content",
              button: "More Brows",
            },
          ],
        },
        {
          Row2: [
            {
              image: TestImage,
              alt: "Face of a girl with shaped eyebrows",
              message: "Test Text Content",
              button: "More Brows",
            },
            {
              image: TestImage,
              alt: "Face of a girl with shaped eyebrows",
              message: "Test Text Content",
              button: "More Brows",
            },
            {
              image: TestImage,
              alt: "Face of a girl with shaped eyebrows",
              message: "Test Text Content",
              button: "More Brows",
            },
          ],
        },
      ],
    };
  },
  methods: {},
  created() {},
  beforeMount() {},
  mounted() {},
};
</script>
<style lang="scss">
.img-wrapper {
  scroll-behavior: smooth;
  height: auto;
  max-width: 80vw;
  transition: all 300ms ease-in-out;
  .img-description-layer {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    visibility: hidden;
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: 4px solid white;
    outline-offset: -12px;
    border-radius: 25px;
    transition: all 300ms ease-in-out;
  }
  .img {
    box-sizing: border-box;
    outline: 2px solid white;
    outline-offset: -8px;
    filter: blur(0px);
    border-radius: 25px;
    box-shadow: 0px 0px 10px 5px #8a919275;
    transition: all 300ms ease-in-out;
  }
  &:hover {
    .img-description-layer {
      box-sizing: border-box;
      visibility: visible;
      opacity: 1;
      outline: 4px solid white;
      outline-offset: -24px;
      border-radius: 50px;
      transition: all 300ms ease-in-out;
    }
    .img {
      box-sizing: border-box;
      outline: 0;
      filter: blur(4px);
      border-radius: 25px;
      transition: all 300ms ease-in-out;
    }
  }
}
</style>