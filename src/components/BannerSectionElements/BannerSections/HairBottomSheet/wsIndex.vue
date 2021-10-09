<template>
  <div>
    <About />
    <ImageGallery />
  </div>
</template>
<script>
export default {
  components: {
    About: () => import(/* webpackPrefetch: true */ './About.vue'),
    ImageGallery: () => import(/* webpackPrefetch: true */ './ImageGallery.vue')
  },
};
</script>