<template>
  <b-navbar id="navbar" toggleable="lg" variant="secondary">
    <b-navbar-brand href="#" class="text-dark">
      <img :src="branding" id="branding" alt="Wonderlust Studio" />
    </b-navbar-brand>

    <!-- Toggle button on mobile -->
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <!-- Togglable navigation -->
    <b-collapse id="nav-collapse" is-nav>
      <!-- <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav> -->

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right> -->
          <!-- Using 'button-content' slot -->
          <!-- <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav> -->
    </b-collapse>
  </b-navbar>
</template>
<script>
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("branding").style.marginTop = "0";
  } else {
    document.getElementById("navbar").style.top = "-60px";
    document.getElementById("branding").style.marginTop = "-50px";
  }
}

import branding from "../../assets/img/ws_brand/logo_transparent.png";
export default {
  data() {
    return {
      branding: branding,
    };
  },
};
</script>
<style scoped>
#navbar {
  position: fixed;
  top: -60px;
  width: 100%;
  transition: top 0.3s;
  z-index: 999;
}
#branding {
  margin-top: -50px;
  max-width: 5em;
  transition: margin-top 0.3s;
}
</style>