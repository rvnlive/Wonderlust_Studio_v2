<template>
  <button @click="scrollToTop" v-show="visible" class="scroll-to-top">
    <b-icon-arrow-up aria-label="Scroll to top" />
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
    scrollToTop: function () {
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
/* purgecss start ignore */
.scroll-to-top {
  position: fixed;
  bottom: 5.5em;
  right: -1em;
  border: 2px solid #e0e0e0;
  background: #f0f0f3;
  border-radius: 10px;
  box-shadow: 5px -5px 10px #a8a8a8, -5px 5px 10px #ffffff;
  padding: 5px 20px 5px 10px;
  color: #6b6b6b;
  cursor: pointer;
  animation: slideIn 250ms;
}
/* purgecss end ignore */
</style>