<template>
  <footer class="slideFromBottom">
    <b-container fluid class="d-flex flex-row justify-content-center">
      <!-- Apple / Google Maps button Start -->
      <b-dropdown
        dropup
        variant="transparent"
        class="wsButton mr-4"
        menu-class="mb-2 border-0 bg-transparent fadeIn"
      >
        <template #button-content>
          <b-icon-map class="mr-2 font-grey" /><span class="sr-only"
            >Address: 175 Orford Lane, Warrington, WA2 7BA</span
          >
        </template>
        <b-dropdown-item
          href="https://maps.apple.com/?q=175+Orford+Lane+Warrington+WA27BA"
          target="_blank"
          class="mb-3 wsButton"
          button-class="font-neumorph"
          >with Apple Maps</b-dropdown-item
        >
        <b-dropdown-item
          href="https://maps.google.com/?q=Wonderlust Studio, Warrington WA2 7BA"
          target="_blank"
          class="wsButton"
          button-class="font-neumorph"
          >with Google Maps</b-dropdown-item
        >
      </b-dropdown>
      <!-- Apple / Google Maps button End -->

      <!-- Business hours Start -->
      <b-dropdown
        dropup
        variant="transparent"
        class="wsButton mr-4"
        offset="-95"
        menu-class="mb-2 border-0 bg-transparent fadeIn font-neumorph"
      >
        <template #button-content>
          <b-icon-clock class="mr-2 font-neumorph" /><span class="sr-only"
            >Business hours</span
          >
        </template>
        <b-dropdown-text
          class="wsButton mb-3 text-center font-neumorph"
          style="width: 260px"
          ><b>Monday:</b> Appointments Only</b-dropdown-text
        >
        <b-dropdown-text class="wsButton mb-3 text-center font-neumorph"
          ><b>Tuesday-Friday:</b> <br />
          10 AM - 6 PM</b-dropdown-text
        >
        <b-dropdown-text class="wsButton mb-3 text-center font-neumorph"
          ><b>Saturday:</b><br />10 AM - 3 PM</b-dropdown-text
        >
        <b-dropdown-text class="wsButton text-center font-neumorph"
          ><b>Sunday:</b> CLOSED</b-dropdown-text
        >
      </b-dropdown>
      <!-- Business hours End -->

      <!-- Contact / Social Media Start -->
      <b-dropdown
        dropup
        variant="transparent"
        class="wsButton"
        right
        menu-class="mb-2 border-0 bg-transparent w-25 fadeIn"
      >
        <template #button-content>
          <b-icon-share class="mr-2 font-neumorph" /><span class="sr-only"
            >Contact us</span
          >
        </template>
        <b-dropdown-item
          variant="transparent"
          href="tel:+447985292757"
          class="text-center wsButton ml-auto mr-0 mb-3"
          alt="Phone"
          style="width: 65px"
        >
          <font-awesome-icon :icon="Phone" class="font-neumorph"
        /></b-dropdown-item>
        <b-dropdown-item
          variant="transparent"
          href="mailto:info@wonderluststudio.co.uk"
          class="text-center wsButton ml-auto mr-0 mb-3"
          alt="eMail"
          style="width: 65px"
        >
          <font-awesome-icon :icon="Mail" class="font-neumorph"
        /></b-dropdown-item>
        <b-dropdown-item
          variant="transparent"
          href="https://www.instagram.com/wonderlust_studio/"
          target="_blank"
          class="text-center wsButton ml-auto mr-0 mb-3"
          alt="Instagram"
          style="width: 65px"
        >
          <font-awesome-icon :icon="Instagram" class="font-neumorph"
        /></b-dropdown-item>
        <b-dropdown-item
          variant="transparent"
          href="https://www.facebook.com/thewonderluststudio"
          target="_blank"
          class="text-center wsButton ml-auto mr-0"
          alt="Facebook"
          style="width: 65px"
        >
          <font-awesome-icon :icon="Facebook" class="font-neumorph"
        /></b-dropdown-item>
      </b-dropdown>
      <!-- Contact / Social Media End -->
    </b-container>
    <p class="p-0 m-0 mt-4 text-center font-neumorph">Wonderlust Studio 2021</p>
    <p class="p-0 m-0 pb-3 text-center font-neumorph">Designed & Developed by RVN</p>
  </footer>
</template>
<script>
export default {
  mixins: ["baseMixin"]
};
</script>