<template>
  <div class="wsNavigation-placeholder">
    <!-- Hair Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Hair'"
      to="/Hair"
      aria-label="Hair"
      class="wsNavigation-placeholder__item wsNavigation-placeholder__item--active_dark"
    />
    <router-link
      v-else
      to="/Hair"
      aria-label="Hair"
      class="wsNavigation-placeholder__item"
    /><!-- Hair Section Indicator ENDS -->

    <!-- Aesthetics Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Aesthetic'"
      to="/Aesthetic"
      aria-label="Aesthetics"
      class="wsNavigation-placeholder__item wsNavigation-placeholder__item--active_dark"
    />
    <router-link
      v-else
      to="/Aesthetic"
      aria-label="Aesthetics"
      class="wsNavigation-placeholder__item"
    /><!-- Aesthetics Section Indicator ENDS -->

    <!-- Biotricologia Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Biotricologia'"
      to="/Biotricologia"
      aria-label="Biotricologia"
      class="wsNavigation-placeholder__item wsNavigation-placeholder__item--active_dark"
    />
    <router-link
      v-else
      to="/Biotricologia"
      aria-label="Biotricologia"
      class="wsNavigation-placeholder__item"
    /><!-- Biotricologia Section Indicator ENDS -->

    <!-- Left/Right Arrow Animation -->
    <!-- <b-icon icon="arrow-left-right" animation="cylon" class="slider-icon" /> -->

    <!-- BrowLash Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Browlash'"
      to="/Browlash"
      aria-label="Brows & Lashes"
      class="wsNavigation-placeholder__item wsNavigation-placeholder__item--active_dark"
    />
    <router-link
      v-else
      to="/Browlash"
      aria-label="Brows & Lashes"
      class="wsNavigation-placeholder__item"
    /><!-- BrowLash Section Indicator ENDS -->

    <!-- Nail Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Nail'"
      to="/Nail"
      aria-label="Nails"
      class="wsNavigation-placeholder__item wsNavigation-placeholder__item--active_dark"
    />
    <router-link
      v-else
      to="/Nail"
      aria-label="Nails"
      class="wsNavigation-placeholder__item"
    /><!-- Nail Section Indicator ENDS -->

    <!-- Facial Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Facial'"
      to="/Facial"
      aria-label="Facials"
      class="wsNavigation-placeholder__item wsNavigation-placeholder__item--active_dark"
    />
    <router-link
      v-else
      to="/Facial"
      aria-label="Facials"
      class="wsNavigation-placeholder__item"
    /><!-- Facial Section Indicator ENDS -->
  </div>
</template>