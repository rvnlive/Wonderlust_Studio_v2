<template>
    <b-collapse id="collapse-2" class="mt-2" v-if="isDetailsVisible">
      <div class="mt-5 mb-5" id="banner">
        <ExampleSection />
      </div>
      <Footer />
    </b-collapse>
</template>
<script>
import Footer from "../MainElements/Footer.vue";
import ExampleSection from "../HomeElements/ExampleSection.vue"
export default {
  props: ['isDetailsVisible'],
    components: {
        Footer,
        ExampleSection
    },
    data() {
      return {
      }
    }
}
</script>