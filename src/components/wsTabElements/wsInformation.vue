<template>
  <div v-if="this.relevantInformation">
    <b-container
      v-for="(information, index) in this.relevantInformation"
      :key="index"
    >
      <a :href="information.url" target="_blank">
        <b-img-lazy
          class="wsInformation-image"
          :src="information.image"
          :alt="information.alt"
        />
      </a>
      <div class="text-justify font-grey wsStory">
        <span class="font-neumorph font-weight-bold text-justify">
          {{ information.introduction }}
        </span>
        <br />
        <br />
        <span class="">
          {{ information.story }}
        </span>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  mixins: ["serviceInformationMixin"],
};
</script>