<template>
  <div class="wsSlidingSubNavigation slideFromRight" v-if="!isAtHome">
    <div class="wsSlidingSubNavigation__item--active">Highlighted</div>
    <div class="wsSlidingSubNavigation__item">Prices</div>
    <div class="wsSlidingSubNavigation__item">Member</div>
    <div class="wsSlidingSubNavigation__item">Contact</div>
    <div class="wsSlidingSubNavigation__item">Support</div>
    <div class="wsSlidingSubNavigation__item">Blog</div>
    <div class="wsSlidingSubNavigation__item">Tools</div>
    <div class="wsSlidingSubNavigation__item">Base</div>
  </div>
</template>
<script>
export default {
  mixins: ["baseMixin"],
  data() {
    return {
    };
  },
};
</script>