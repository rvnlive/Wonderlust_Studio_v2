<template>
  <div v-if="(online === false) & isDetailsVisible" class="pb-2">
    <div class="rounded-lg mt-4 mb-4 pt-3 pb-2 bg-danger">
      <b-icon icon="x-circle" scale="1.5" variant="white" class="mb-1"></b-icon>
      <p class="text-white">An error occured while loading the component.</p>
      <button @click="forceReload()" class="rounded-lg border-0 mb-1">
        Try Again
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isDetailsVisible"],
  data() {
    return {
      online: window.navigator.onLine,
    };
  },
  methods: {
    forceReload() {
      this.$forceUpdate();
    },
  },
};
</script>