import LogoBlack from "../assets/img/ws_brand/logo_transparent_black.png";
import LogoWhite from "../assets/img/ws_brand/logo_transparent_white.png";
import { faArrowsAltH, faHome } from "@fortawesome/free-solid-svg-icons";
export const baseMixin = {
  components: {
    wsLoading: () => import('../helpers/forComponentStatus/wsLoadingComponent.vue'),
    wsSlidingNavigation: () => import('../helpers/wsSlidingNavigation.vue'),
  },
  data() {
    return {
      // wsLogos
      logoBlack: LogoBlack,
      logoWhite: LogoWhite,

      // Icons
      arrow: faArrowsAltH,
      house: faHome,
      // Vue-router page routes
      viewRoutes: {
        home: this.$router.currentRoute.path === '/Home',
        hair: this.$router.currentRoute.path === '/Hair',
        aesthetic: this.$router.currentRoute.path === '/Aesthetic',
        biotricologia: this.$router.currentRoute.path === '/Biotricologia',
        browlash: this.$router.currentRoute.path === '/Browlash',
        nail: this.$router.currentRoute.path === '/Nail',
        facial: this.$router.currentRoute.path === '/Facial'
      },

      // Page background colors
      backgroundColor: {
        home: '#F0F0F3',
        hair: 'linear-gradient(120deg, #f0f0f3 50%, #f9caa7)',
        aesthetic: 'linear-gradient(-120deg, #e99b9a 20%, #f9caa7)',
        biotricologia: 'linear-gradient(120deg, #e99b9a 20%, #e6b9bf 80%)',
        browlash: 'linear-gradient(60deg, #e6b9bf 20%, #9f8189 80%)',
        nail: 'linear-gradient(120deg, #9f8189 10%, #f3abb6)',
        facial: 'linear-gradient(120deg, #f3abb6 20%, #ffcad4)'
      },

      // Sliding Navigation buttons
      navigationButton: [
        '#Hair',
        '#Aesthetic',
        '#Biotricologia',
        '#BrowLash',
        '#Nail',
        '#Facial'
      ],

      // Conditions/States
      isLoading: false,
      isAtHome: true,
    }
  },
  watch: {},
  methods: {
    setBackground() { // Setting page background color on load for
      if (this.viewRoutes.home) { // Home page
        document.body.style.background = this.backgroundColor.home
      } else if (this.viewRoutes.hair) { // Hair page
        document.body.style.background = this.backgroundColor.hair
      } else if (this.viewRoutes.aesthetic) { // Aesthetics page
        document.body.style.background = this.backgroundColor.aesthetic
      } else if (this.viewRoutes.biotricologia) { // Biotricologia page
        document.body.style.background = this.backgroundColor.biotricologia
      } else if (this.viewRoutes.browlash) { // BrowLash page
        document.body.style.background = this.backgroundColor.browlash
      } else if (this.viewRoutes.nail) { // Nail page
        document.body.style.background = this.backgroundColor.nail
      } else if (this.viewRoutes.facial) { // Facial page
        document.body.style.background = this.backgroundColor.facial
      }
    },
    setPageActive() { // Revealing hidden navigation button tag for
      this.startLoading()
      if (this.viewRoutes.hair) { // Hair button
        this.isAtHome = false
        this.resetPageActive()
        const navigation = document.querySelector("#Hair")
        if (navigation) {
          navigation.classList.remove("wsSliderNavigation-main__item")
          navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
        }
      } else if (this.viewRoutes.aesthetic) { // Aesthetic button
        this.isAtHome = false
        this.resetPageActive()
        const navigation = document.querySelector("#Aesthetic")
        if (navigation) {
          navigation.classList.remove("wsSliderNavigation-main__item")
          navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
        }
      } else if (this.viewRoutes.biotricologia) { // Biotricologia button
        this.isAtHome = false
        this.resetPageActive()
        const navigation = document.querySelector("#Biotricologia")
        if (navigation) {
          navigation.classList.remove("wsSliderNavigation-main__item")
          navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
        }
      } else if (this.viewRoutes.browlash) { // BrowLash button
        this.isAtHome = false
        this.resetPageActive()
        const navigation = document.querySelector("#BrowLash")
        if (navigation) {
          navigation.classList.remove("wsSliderNavigation-main__item")
          navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
        }
      } else if (this.viewRoutes.nail) { // Nail button
        this.isAtHome = false
        this.resetPageActive()
        const navigation = document.querySelector("#Nail")
        if (navigation) {
          navigation.classList.remove("wsSliderNavigation-main__item")
          navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
        }
      } else if (this.viewRoutes.facial) { // Facial button
        this.isAtHome = false
        this.resetPageActive()
        const navigation = document.querySelector("#Facial")
        if (navigation) {
          navigation.classList.remove("wsSliderNavigation-main__item")
          navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
        }
      }
    },
    startLoading() { // Loading animation with delayed hide
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 750)
    },
    resetPageActive() { // Resetting Navigation Button (hiding button tag)
      const navigation = document.querySelectorAll(this.navigationButton)
      for (let button of navigation) {
        button.classList.remove("wsSliderNavigation-main__item--active", "mt-2")
        button.classList.add("wsSliderNavigation-main__item")
      }
    },
    backHome() { // Back Home navigation button
      this.$router.push('/Home')
      this.resetPageActive()
      this.isAtHome = true
    }
  },
  mounted() {
    this.setBackground()
    this.setPageActive()
  }
}
