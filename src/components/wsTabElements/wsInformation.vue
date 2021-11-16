<template>
  <div v-if="this.relevantInformation" class="slideFromBottom">
    <b-container
      v-for="(information, index) in this.relevantInformation"
      :key="index"
    >
      <a
        v-if="information.url !== null"
        :href="information.url"
        target="_blank"
      >
        <b-img-lazy
          class="wsInformation-image"
          :src="information.image"
          :alt="information.alt"
        />
      </a>
      <a v-else-if="information.url === null" href="#">
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
        <span>
          {{ information.story }}
          <span v-if="information.story2">
            <br />
            <br />
            {{ information.story2 }}
          </span>
          <span v-if="information.story3">
            <br />
            <br />
            {{ information.story3 }}
          </span>
          <br />
          <br />
          <span class="font-italic"
            >For more information, visit:

            <a
              v-for="(URL, index) in information.brandURL"
              :href="URL"
              target="_blank"
              :key="index"
              ><span class="pl-1">{{
                information.brandName[index] + ","
              }}</span></a
            >

            contact us or take a look at our prices!</span
          >
        </span>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  mixins: ["baseMixin", "serviceInformationMixin"],
};
</script>