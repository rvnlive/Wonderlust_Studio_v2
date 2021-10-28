<template>
  <div>
    <b-list-group
      class="slideFromBottom bg-transparent pt-3 pl-4 pr-4 pb-4"
      v-for="(treatments, index) in this.relevantDetails"
      :key="index"
    >
      <b-list-group-item
        :class="{
          'justify-content-center': treatment.header,
          'font-neumorph': treatment.header,
          'font-weight-bold': treatment.header,
          'justify-content-between': treatment.name,
        }"
        v-for="(treatment, index) in treatments"
        :key="index + treatment.name || index + treatment.header"
        :treatment="treatment"
        class="
          d-flex
          flex-row
          align-items-center
          bg-transparent
          border-0
          rounded-lg
          wsButton
          list-font-style
          mt-0
          mb-3
          pl-2
          pr-2
        "
      >
        {{ treatment.header }}
        <div v-if="treatment.package">
          <div class="font-neumorph font-italic font-weight-light m-0">
            {{ treatment.package }}
          </div>
          <br />
          {{ treatment.name }}
        </div>
        <div v-if="!treatment.package">
          {{ treatment.name }}
        </div>
        <b-badge
          pill
          variant="transparent"
          class="m-1 wsPriceBadge"
          v-if="treatment.price"
        >
          <span v-if="treatment.range">
            {{ treatment.range + " " }}
          </span>
          {{ "£" + treatment.price }}
        </b-badge>

        <div v-if="treatment.prices" class="d-flex flex-column">
          <b-badge
            pill
            variant="transparent"
            class="m-1 wsPriceBadge ml-auto"
            v-for="(value, index) in treatment.prices"
            :key="index + value"
          >
            {{ treatment.range[index] + " - £" + value }}
          </b-badge>
        </div>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  mixins: ["servicePricesMixin"],
  // computed: {
  //   header: function() {
  //     return this.relevantDetails[1].slice(0,1)
  //   }
  // }
};
</script>