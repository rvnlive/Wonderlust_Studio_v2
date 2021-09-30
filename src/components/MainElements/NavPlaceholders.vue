<template>
  <div class="wsBanners-placeholder">
    <!-- Hair Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Hair'"
      to="/Hair"
      aria-label="Hair"
      class="wsBanners-placeholder__item wsBanners-placeholder__item--active"
    />
    <router-link
      v-else
      to="/Hair"
      aria-label="Hair"
      class="wsBanners-placeholder__item"
    /><!-- Hair Section Indicator ENDS -->

    <!-- Aesthetics Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Aesthetic'"
      to="/Aesthetic"
      aria-label="Aesthetics"
      class="wsBanners-placeholder__item wsBanners-placeholder__item--active"
    />
    <router-link
      v-else
      to="/Aesthetic"
      aria-label="Aesthetics"
      class="wsBanners-placeholder__item"
    /><!-- Aesthetics Section Indicator ENDS -->

    <!-- Biotricologia Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Biotricologia'"
      to="/Biotricologia"
      aria-label="Biotricologia"
      class="wsBanners-placeholder__item wsBanners-placeholder__item--active"
    />
    <router-link
      v-else
      to="/Biotricologia"
      aria-label="Biotricologia"
      class="wsBanners-placeholder__item"
    /><!-- Biotricologia Section Indicator ENDS -->

    <!-- Left/Right Arrow Animation -->
    <!-- <b-icon icon="arrow-left-right" animation="cylon" class="slider-icon" /> -->

    <!-- BrowLash Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Browlash'"
      to="/Browlash"
      aria-label="Brows & Lashes"
      class="wsBanners-placeholder__item wsBanners-placeholder__item--active"
    />
    <router-link
      v-else
      to="/Browlash"
      aria-label="Brows & Lashes"
      class="wsBanners-placeholder__item"
    /><!-- BrowLash Section Indicator ENDS -->

    <!-- Nail Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Nail'"
      to="/Nail"
      aria-label="Nails"
      class="wsBanners-placeholder__item wsBanners-placeholder__item--active"
    />
    <router-link
      v-else
      to="/Nail"
      aria-label="Nails"
      class="wsBanners-placeholder__item"
    /><!-- Nail Section Indicator ENDS -->

    <!-- Facial Section Indicator STARTS --><router-link
      v-if="$router.currentRoute.path === '/Facial'"
      to="/Facial"
      aria-label="Facials"
      class="wsBanners-placeholder__item wsBanners-placeholder__item--active"
    />
    <router-link
      v-else
      to="/Facial"
      aria-label="Facials"
      class="wsBanners-placeholder__item"
    /><!-- Facial Section Indicator ENDS -->
  </div>
</template>