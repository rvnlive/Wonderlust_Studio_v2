<template>
  <div class="slideFromBottom" style="margin-top: 0.5em">
    <b-tabs
      small
      justified
      pills
      lazy
      no-nav-style
      nav-class="font-neumorph border-0 ml-2 mr-2"
      active-nav-item-class="text-dark font-neumorph font-weight-bold wsTabButton"
      content-class="wsSection slideFromBottom"
    >
      <b-tab
        title="Details"
        title-item-class="border-0 font-grey"
        title-link-class="border-0 text-dark font-grey"
        :active="readQuery((query = 'Details'))"
        @click="addQuery((query = 'Details'))"
      >
        <Information />
        <Details />
      </b-tab>
      <b-tab
        title="Prices"
        title-item-class="border-0 font-grey"
        title-link-class="border-0 text-dark font-grey"
        :active="readQuery((query = 'Prices'))"
        @click="addQuery((query = 'Prices'))"
      >
        <Prices />
      </b-tab>
    </b-tabs>
    <wsFooter style="position: static; margin: 1.5em auto 3em auto" />
  </div>
</template>
<script>
export default {
  mixins: ["baseMixin"],
  components: {
    Information: () =>
      import(
        /* webpackChunkName: "Services", webpackPrefecth: true */ "../wsTabElements/wsInformation.vue"
      ),
    Details: () =>
      import(
        /* webpackChunkName: "Services", webpackPrefecth: true */ "../wsTabElements/wsDetails.vue"
      ),
    Prices: () =>
      import(
        /* webpackChunkName: "Services", webpackPrefecth: true */ "../wsTabElements/wsPrices.vue"
      ),
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>