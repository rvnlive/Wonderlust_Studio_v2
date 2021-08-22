<template>
  <footer>
    <b-container class="pb-3">
      <p class="h2 text-light text-center">CONTACT</p>
      <hr class="bg-light mb-5">
      <b-row
        class="
          d-flex
          flex-row flex-wrap
          justify-content-center
          align-content-center
        "
      >
        <b-col
          class="
            d-flex
            flex-column
            justify-content-around
            align-items-center
            mb-4 mb-lg-0
          "
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d148.68120738032223!2d-2.5862998751006385!3d53.39874089938534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc61ff04eb50ff4df!2sWonderlust%20Studio!5e0!3m2!1sen!2suk!4v1629188774293!5m2!1sen!2suk"
            width="300"
            height="300"
            allowfullscreen=""
            loading="lazy"
            class="rounded-lg"
          ></iframe>
        </b-col>
        <b-col
          lg="5"
          class="
            text-light text-center
            d-flex
            flex-column
            justify-content-around
            align-items-center
            mb-4 mb-lg-0
          "
        >
          <p>Address:<br /><a class="text-light" href="https://g.page/wonderluststudio?share" target="_blank">175 Orford Lane, Warrington, WA2 7BA</a></p>
          <p>Phone:<br /><a class="text-light" href="tel:+447985292757" target="_blank">+44-7985-292-757</a></p>
          <p>
            Business hours:<br />
            Sun-Mon: Appointments Only<br />Tue-Fri: 10 AM - 6 PM<br />Sat: 10
            AM - 3 PM
          </p>
        </b-col>
        <b-col
          class="d-flex flex-column justify-content-around align-items-center"
        >
        <p class="text-white text-center">We’re social. Are you?<br />You can find us on:</p>
          <a
            href="https://www.instagram.com/wonderlust_studio/"
            target="_blank"
          >
            <b-img-lazy
              :src="InstagramLogo"
              alt="Instagram logo"
              class="mb-3 mb-lg-0 social-logos"
            />
          </a>
          <a
            href="https://https://www.facebook.com/thewonderluststudio"
            target="_blank"
          >
            <b-img-lazy
              :src="FacebookLogo"
              alt="Facebook logo"
              class="mb-3 mb-lg-0 social-logos"
            />
          </a>
        </b-col>
      </b-row>
      <p class="text-secondary mt-4 text-center">Designed & Developed by RVN</p>
    </b-container>
  </footer>
</template>
<script>
import FacebookLogo from "../../assets/img/social_logos/facebook_logo.png";
import InstagramLogo from "../../assets/img/social_logos/instagram_logo.png";
export default {
  data() {
    return {
      FacebookLogo: FacebookLogo,
      InstagramLogo: InstagramLogo,
    };
  },
};
</script>