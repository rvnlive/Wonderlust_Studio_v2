<template>
  <footer>
    <hr class="bg-light mb-3" />
    <b-col class="p-0 m-0 align-items-end">
      <b-row class="d-flex flex-row justify-content-center m-0 p-0">
        <!-- Apple / Google Maps button Start -->
        <b-dropdown dropup variant="transparent" class="wsButton mr-3">
          <template #button-content>
            <b-icon icon="map" class="mr-2" /><span class="sr-only"
              >Address: 175 Orford Lane, Warrington, WA2 7BA</span
            >
          </template>
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
        <!-- Apple / Google Maps button End -->

        <!-- Business hours Start -->
        <b-dropdown
          dropup
          variant="transparent"
          class="wsButton mr-3"
          offset="-97"
        >
          <template #button-content>
            <b-icon icon="clock" class="mr-2" /><span class="sr-only"
              >Business hours</span
            >
          </template>
          <b-dropdown-text style="width: 260px"
            ><b>Monday:</b> Appointments Only</b-dropdown-text
          >
          <b-dropdown-divider />
          <b-dropdown-text
            ><b>Tuesday-Friday:</b> <br />
            10 AM - 6 PM</b-dropdown-text
          >
          <b-dropdown-divider />
          <b-dropdown-text><b>Saturday:</b><br />10 AM - 3 PM</b-dropdown-text>
          <b-dropdown-divider />
          <b-dropdown-text><b>Sunday:</b> CLOSED</b-dropdown-text>
        </b-dropdown>
        <!-- Business hours End -->

        <!-- Contact / Social Media Start -->
        <b-dropdown dropup variant="transparent" class="wsButton" offset="-90">
          <template #button-content>
            <b-icon icon="share" class="mr-2" /><span class="sr-only"
              >Contact us</span
            >
          </template>
          <b-dropdown-item
            variant="transparent"
            href="tel:+447985292757"
            class="text-center"
            alt="Phone"
          >
            <font-awesome-icon :icon="Phone"
          /></b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item
            variant="transparent"
            href="mailto:info@wonderluststudio.co.uk"
            class="text-center"
            alt="eMail"
          >
            <font-awesome-icon :icon="Mail"
          /></b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item
            variant="transparent"
            href="https://www.instagram.com/wonderlust_studio/"
            target="_blank"
            class="text-center"
            alt="Instagram"
          >
            <font-awesome-icon :icon="Instagram"
          /></b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item
            variant="transparent"
            href="https://www.facebook.com/thewonderluststudio"
            target="_blank"
            class="text-center"
            alt="Facebook"
          >
            <font-awesome-icon :icon="Facebook"
          /></b-dropdown-item>
        </b-dropdown>
        <!-- Contact / Social Media End -->
      </b-row>
      <p class="p-0 m-0 mt-4 text-center">Wonderlust Studio 2021</p>
      <p class="p-0 m-0 text-center">Designed & Developed by RVN</p>
    </b-col>
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