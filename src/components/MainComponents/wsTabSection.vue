<template>
  <div class="slideFromBottom">
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
        title="Highlights"
        title-item-class="border-0 font-grey"
        title-link-class="border-0 bg-transparent font-grey"
        :active="readQuery((query = 'Highlights'))"
        @click="addQuery((query = 'Highlights'))"
      >
        <Gallery />
      </b-tab>
      <b-tab
        title="Prices"
        title-item-class="border-0 font-grey"
        title-link-class="border-0 bg-transparent font-grey"
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
    Gallery: () =>
      import(
        /* webpackChunkName: "Services", webpackPrefecth: true */ "../wsHair/wsHighligthsGallery.vue"
      ),
    Prices: () =>
      import(
        /* webpackChunkName: "Services", webpackPrefecth: true */ "../wsHair/wsPrices.vue"
      ),
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {},
};
</script>