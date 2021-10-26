<template>
  <div class="wsSubNavigationTabs slideFromBottom">
    <b-tabs
      small
      fill
      pills
      lazy
      active-nav-item-class="text-dark font-neumorph font-weight-bold wsTabButton"
      content-class="wsSection slideFromBottom"
    >
      <b-tab
        title="Highlights"
        title-link-class="border-0 bg-transparent font-grey"
        :active="readQuery((query = 'Highlights'))"
        @click="addQuery((query = 'Highlights'))"
      >
        <Gallery />
      </b-tab>
      <b-tab
        title="Prices"
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
     activeTab: {
                set(value) {
                    let query = {...this.$route.query};
                    query.tab = value;
                    this.$router.replace({query: query});
                },
                get() {
                    return (this.$route.query.tab || 'tabA');
                }
            }
  },
  methods: {},
};
</script>