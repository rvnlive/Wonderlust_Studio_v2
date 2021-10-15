export const baseMixin = {
  components: {
    wsLoading: () => import('../helpers/forComponentStatus/wsLoadingComponent.vue'),
    wsSlidingNavigation: () => import('../helpers/wsSlidingNavigation.vue')
  },
  data() {
    return {
      isDetailsVisible: false,
      isLoading: false,
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
        hair: 'linear-gradient(120deg, #fff 30%, #f9caa7)',
        aesthetic: 'linear-gradient(-120deg, #e99b9a 20%, #f9caa7)',
        biotricologia: 'linear-gradient(120deg, #e99b9a 20%, #e6b9bf 80%)',
        browlash: 'linear-gradient(60deg, #e6b9bf 20%, #9f8189 80%)',
        nail: 'linear-gradient(120deg, #9f8189 10%, #f3abb6)',
        facial: 'linear-gradient(120deg, #f3abb6 20%, #ffcad4)'
      },
      // Sliding Navigation button
      navigationButton: [
        '#Hair',
        '#Aesthetic',
        '#Biotricologia',
        '#BrowLash',
        '#Nail',
        '#Facial'
      ],
      // Page banners
      pageBanner: {
        hair: '.wsSliderNavigation-main__item--hair',
        aesthetic: '.wsBanner--aesthetic',
        biotricologia: '.wsBanner--biotricologia',
        browlash: '.wsBanner--browlash',
        nail: '.wsBanner--nail',
        facial: '.wsBanner--facial'
      }
    }
  },
  watch: {},
  methods: {
    setBackground() { // Setting page background color
      if (this.viewRoutes.home) { // Hair view background color
        document.body.style.background = this.backgroundColor.home
      } else if (this.viewRoutes.hair) { // Hair view background color
        document.body.style.background = this.backgroundColor.hair
      } else if (this.viewRoutes.aesthetic) { // Aesthetics view background color
        document.body.style.background = this.backgroundColor.aesthetic
      } else if (this.viewRoutes.biotricologia) { // Biotricologia view background color
        document.body.style.background = this.backgroundColor.biotricologia
      } else if (this.viewRoutes.browlash) { // BrowLash view background color
        document.body.style.background = this.backgroundColor.browlash
      } else if (this.viewRoutes.nail) { // Nail view background color
        document.body.style.background = this.backgroundColor.nail
      } else if (this.viewRoutes.facial) { // Facial view background color
        document.body.style.background = this.backgroundColor.facial
      }
    },
    setPageActive() { // Navigation Icon highlight
      if (this.viewRoutes.hair) { // Hair
        this.resetPageActive()
        const navigation = document.querySelector("#Hair")
        navigation.classList.remove("wsSliderNavigation-main__item")
        navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
      } else if (this.viewRoutes.aesthetic) { // Aesthetic
        this.resetPageActive()
        const navigation = document.querySelector("#Aesthetic")
        navigation.classList.remove("wsSliderNavigation-main__item")
        navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
      } else if (this.viewRoutes.biotricologia) { // Biotricologia
        this.resetPageActive()
        const navigation = document.querySelector("#Biotricologia")
        navigation.classList.remove("wsSliderNavigation-main__item")
        navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
      } else if (this.viewRoutes.browlash) { // BrowLash
        this.resetPageActive()
        const navigation = document.querySelector("#BrowLash")
        navigation.classList.remove("wsSliderNavigation-main__item")
        navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
      } else if (this.viewRoutes.nail) { // Nail
        this.resetPageActive()
        const navigation = document.querySelector("#Nail")
        navigation.classList.remove("wsSliderNavigation-main__item")
        navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
      } else if (this.viewRoutes.facial) { // Facial
        this.resetPageActive()
        const navigation = document.querySelector("#Facial")
        navigation.classList.remove("wsSliderNavigation-main__item")
        navigation.classList.add("wsSliderNavigation-main__item--active", "mt-2")
      }
    },
    startLoading() { // Start loading animation
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 750)
    },
    // open() { // On opening Bottom Sheet
    //   this.isDetailsVisible = true
    // },
    resetPageActive() {
      const navigation = document.querySelectorAll(this.navigationButton)
      for (let button of navigation) {
        button.classList.remove("wsSliderNavigation-main__item--active", "mt-2")
        button.classList.add("wsSliderNavigation-main__item", "fadeIn")
      }
    },
    backHome() {
      this.$router.push('/Home')
      this.resetPageActive()
      this.isAtHome = true
    }
  },
  mounted() {
    this.setBackground()
    this.setPageActive()
    this.startLoading()
    this.isDetailsVisible = false
  },
  beforeUpdate() { }
}
