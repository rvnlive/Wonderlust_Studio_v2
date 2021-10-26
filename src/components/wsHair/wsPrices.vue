<template>
  <b-list-group class="slideFromBottom bg-transparent pl-4 pr-4 pb-3">
      <b-list-group-item
        v-for="treatment in this.relevantDetails[0]"
        :key="treatment.name"
        class="
          d-flex
          justify-content-between
          align-items-center
          bg-transparent
          border-0
          rounded-lg
          wsButton
          font-grey font-weight-light
          mt-0
          mb-3
          pl-2
          pr-2
        "
      >
        {{ treatment.name }}
        <b-badge pill>{{ treatment.price }}</b-badge>
      </b-list-group-item>
      <b-list-group-item v-if="this.relevantDetails[1]" class="mt-3 bg-transparent border-0 mb-3 text-center wsButton">
          Extras
      </b-list-group-item>
      <b-list-group-item
        v-for="extras in this.relevantDetails[1]"
        :key="extras.name"
        class="
          d-flex
          justify-content-between
          align-items-center
          bg-transparent
          border-0
          rounded-lg
          wsButton
          font-grey font-weight-light
          mt-0
          mb-3
          pl-2
          pr-2
        "
      >
        {{ extras.name }}
        <b-badge pill>{{ extras.price }}</b-badge>
      </b-list-group-item>
  </b-list-group>
</template>
<script>
export default {
  mixins: ["servicePricesMixin"],
};
</script>