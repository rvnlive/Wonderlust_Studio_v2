<template>
  <BiotricologiaBanner :logoWhite="logoWhite"/>
</template>
<script>
import BiotricologiaBanner from '../components/BannerElements/BiotricologiaBanner.vue'
export default {
    props: ['logoWhite'],
    components: {
        BiotricologiaBanner
    }
}
</script>