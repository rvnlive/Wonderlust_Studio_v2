<template>
  <b-card v-show="!loading">
    <b-skeleton animation="wave" width="85%"></b-skeleton>
    <b-skeleton animation="wave" width="55%"></b-skeleton>
    <b-skeleton animation="wave" width="70%"></b-skeleton>
  </b-card>
</template>
<script>
export default {
  name: "ComponentLoading",
  data() {
    return {
      loading: false,
    };
  },
  computed: {},
  methods: {
  },
  mounted() {
    // this.whileLoading();
  },
};
</script>