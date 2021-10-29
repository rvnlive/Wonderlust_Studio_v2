<template>
  <div class="slideFromBottom" style="margin: 0.5em auto 0 auto; max-width: 1024px">
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
    <wsFooter style="position: static; margin: 1.5em auto 3em auto; max-width: 1024px" />
  </div>
</template>
<script>
export default {
  mixins: ["baseMixin", "componentMixin"]
};
</script>