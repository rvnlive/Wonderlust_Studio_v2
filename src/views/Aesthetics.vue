<template>
  <AestheticsBanner :logoBlack="logoBlack"/>
</template>
<script>
import AestheticsBanner from '../components/BannerElements/AestheticsBanner.vue'
export default {
    props: ['logoBlack'],
    components: {
        AestheticsBanner
    }
}
</script>