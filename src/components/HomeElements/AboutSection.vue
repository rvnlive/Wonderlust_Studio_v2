<template>
  <b-container
    fluid
    class="bg-white d-flex flex-row flex-wrap justify-content-center m-0 p-0"
    id="About"
  >
    <h1
      class="hand-writing-font--600 text-center mt-4 pt-5 pl-3 pr-3 pb-2 w-100"
    >
      WE CREATE A WHOLE NEW YOU. xoxo<br />
    </h1>
    <b-list-group class="mt-4 text-center">
      <b-list-group-item class="hand-writing-font h2 m-0 mb-2 p-0 bg-transparent border border-0"
        >We are more, than just</b-list-group-item
      >
      <b-list-group-item class="h5 m-0 pt-1 pl-3 pr-3 bg-transparent border border-0"
        >a nail salon, where grown-ups do finger paint,</b-list-group-item
      >
      <b-list-group-item class="h5 m-0 pt-0 bg-transparent border border-0"
        >a hair salon, the people groomers,</b-list-group-item
      >
      <b-list-group-item class="h5 m-0 pt-0 bg-transparent border border-0"
        >a beauty salon, that beautifies your face...</b-list-group-item
      >
      <b-list-group-item class="h4 m-0 p-0 pt-3 bg-transparent border border-0"
        >Here we know beauty.</b-list-group-item
      >
      <b-list-group-item class="h3 m-0 bg-transparent border border-0"
        >That's a <b-img-lazy :src="Fact" alt="Fact" class="fact-stamp"
      /></b-list-group-item>
    </b-list-group>
    <div class="d-flex flex-row flex-wrap align-items-center"></div>
  </b-container>
</template>
<script>
import Fact from "../../assets/img/etc/fact_stamp_transparentbg.png";
export default {
  data() {
    return {
      Fact: Fact,
    };
  },
};
</script>