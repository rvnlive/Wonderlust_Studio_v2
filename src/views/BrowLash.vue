<template>
  <BrowLashBanner :logoWhite="logoWhite"/>
</template>
<script>
import BrowLashBanner from '../components/BannerElements/BrowLashBanner.vue'
export default {
    props: ['logoWhite'],
    components: {
        BrowLashBanner
    }
}
</script>