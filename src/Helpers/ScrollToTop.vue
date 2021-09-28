<template>
  <button @click="scrollTop" v-show="visible" class="bottom-right btn">
      <b-icon icon="arrow-up" class="text-light" aria-label="Scroll to top"/>
  </button>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId);
        }
        window.scroll(0, window.pageYOffset - 50);
      }, 10);
    },
    scrollListener: function () {
      this.visible = window.scrollY > 150;
    },
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy: function () {
    window.removeEventListener("scroll", this.scrollListener);
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 3em;
  right: 0.5em;
  cursor: pointer;
}
.btn {
  border-radius: 10%;
  background-color: rgba(0, 0, 0, 0.55);
  padding: 10px;
}
</style>