<template>
  <footer>
    <b-container fluid class="pb-3">
      <p class="h3 text-center">CONTACT US</p>
      <hr class="bg-light mb-3" />
      <b-row class="d-flex flex-column flex-md-row align-content-center">
        <b-col
          class="
            text-center
            d-flex
            flex-column
            align-items-center
            mt-2 mt-lg-4
            mb-4 mb-lg-0
          "
        >
          <p class="h5">Address:</p>
          <p class="h6">175 Orford Lane, Warrington, WA2 7BA</p>
          <b-dropdown text="Find us" offset="-35" class="mt-1">
            <b-dropdown-item-button
              href="https:/maps.apple.com/?q=175+Orford+Lane+Warrington+WA27BA"
              >with Apple Maps</b-dropdown-item-button
            >
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button
              href="https://maps.google.com/?q=Wonderlust Studio, Warrington WA2 7BA"
              >with Google Maps</b-dropdown-item-button
            >
          </b-dropdown>
        </b-col>
        <b-col class="d-flex flex-column align-items-center mt-4">
          <p class="h5">Business hours:</p>
          <b-row>
            <b-tabs
              pills
              active-nav-item-class="bg-secondary"
              content-class="border border-secondary rounded mt-1 p-2"
            >
              <b-tab title="Mon" active>Appointments Only</b-tab>
              <b-tab title="Tue-Fri">10 AM - 6 PM</b-tab>
              <b-tab title="Sat">10 AM - 3 PM</b-tab>
              <b-tab title="Sun">Closed</b-tab>
            </b-tabs>
          </b-row>
        </b-col>
        <b-col class="d-flex flex-column align-items-center mt-5 mt-lg-4">
          <p class="h5 text-center">We’re social. Are you?</p>
          <b-tabs
            pills
            active-nav-item-class="bg-secondary"
            content-class="border border-secondary rounded mt-1 p-2"
          >
            <b-tab active>
              <template #title>
                <font-awesome-icon :icon="Phone" />
              </template>
              <a href="tel:+447985292757" target="_blank" class="text-dark"
                >+44-7985-292-757</a
              ></b-tab
            >
            <b-tab>
              <template #title>
                <font-awesome-icon :icon="Mail" />
              </template>
              <a href="mailto:info@wonderluststudio.co.uk" class="text-dark"
                >info@wonderluststudio.co.uk</a
              ></b-tab
            >
            <b-tab>
              <template #title>
                <font-awesome-icon :icon="Instagram" />
              </template>
              <a
                href="https://www.instagram.com/wonderlust_studio/"
                class="text-dark"
                target="_blank"
                >@wonderlust_studio</a
              ></b-tab
            >
            <b-tab>
              <template #title>
                <font-awesome-icon :icon="Facebook" />
              </template>
              <a
                href="https://www.facebook.com/thewonderluststudio"
                class="text-dark"
                target="_blank"
                >@thewonderluststudio</a
              ></b-tab
            >
          </b-tabs>
        </b-col>
      </b-row>
      <p class="mt-4 text-center">Wonderlust Studio 2021</p>
      <p class="mt-4 text-center">Designed & Developed by RVN</p>
    </b-container>
  </footer>
</template>
<script>
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
export default {
  data() {
    return {
      Phone: faPhone,
      Mail: faEnvelope,
      Instagram: faInstagram,
      Facebook: faFacebook,
    };
  },
  computed: {},
  methods: {},
};
</script>
<style>
.nav-link {
  color: #000000;
}
</style>