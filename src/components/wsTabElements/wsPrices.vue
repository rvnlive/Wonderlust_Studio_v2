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
        v-for="treatment in treatments"
        :key="treatment.name"
        :treatment="treatment"
        class="
          d-flex
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
        {{ treatment.name }}
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