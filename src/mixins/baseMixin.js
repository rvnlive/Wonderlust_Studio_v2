import LogoBlack from "../assets/img/ws_brand/logo_transparent_black.png";
import LogoWhite from "../assets/img/ws_brand/logo_transparent_white.png";
import { faArrowsAltH, faHome } from "@fortawesome/free-solid-svg-icons";
export const baseMixin = {
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
      backgroundColor: '#ecf0f3',

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
      document.body.style.background = this.backgroundColor
    },
    setPageActive() { // Revealing hidden navigation button tag for
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
      this.startLoading()
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
