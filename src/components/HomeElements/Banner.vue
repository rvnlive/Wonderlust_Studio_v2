<template>
    <b-container fluid center class="m-0 p-0">
      <div class="modelBanner" alt="Banner of a girl with a long, white hair">
        <b-img :src="transparentLogo" class="branding"/>
      </div>
    </b-container>
</template>

<script>
import transparentLogo from "../../assets/img/ws_brand/logo_transparent.png";
export default {
  data() {
    return {
      transparentLogo: transparentLogo,
    };
  },
};
</script>