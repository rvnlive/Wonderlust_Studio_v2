<template>
<b-container fluid class="m-0 p-0">
  <b-row class="m-0 p-0">
    <b-col lg="4" class="m-0 p-0" align-self="stretch">
      <b-img-lazy
        class="w-100"
        :src="TestImage"
        alt="Face of a girl with unshaped and shaped eyebrows"
      />
    </b-col>
    <b-col lg="4" class="m-0 p-0" align-self="stretch">
      <b-img-lazy
        class="w-100"
        :src="TestImage"
        alt="Face of a girl with unshaped and shaped eyebrows"
      />
    </b-col>
    <b-col lg="4" class="m-0 p-0" align-self="stretch">
      <b-img-lazy
        class="w-100"
        :src="TestImage"
        alt="Face of a girl with unshaped and shaped eyebrows"
      />
    </b-col>
  </b-row>
  <b-row class="m-0 p-0">
    <b-col lg="4" class="m-0 p-0" align-self="stretch">
      <b-img-lazy
        class="w-100"
        :src="TestImage"
        alt="Face of a girl with unshaped and shaped eyebrows"
      />
    </b-col>
    <b-col lg="4" class="m-0 p-0" align-self="stretch">
      <b-img-lazy
        class="w-100"
        :src="TestImage"
        alt="Face of a girl with unshaped and shaped eyebrows"
      />
    </b-col>
    <b-col lg="4" class="m-0 p-0" align-self="stretch">
      <b-img-lazy
        class="w-100"
        :src="TestImage"
        alt="Face of a girl with unshaped and shaped eyebrows"
      />
    </b-col>
  </b-row>
  </b-container>
</template>
<script>
import TestImage from "../../assets/img/test_images/test_image_1.png";
export default {
  data() {
    return {
      TestImage: TestImage,
    };
  },
};
</script>