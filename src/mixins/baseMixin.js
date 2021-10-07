export const baseMixin = {
  components: {
    wsLoading: () => import("../Helpers/forComponentStatus/wsLoadingComponent.vue"),
    wsBottomSheet: () => import(/* webpackPrefetch: true */ '../Helpers/wsBottomSheet.vue'),
    wsBannerElement: () => import(/* webpackPrefetch: true */ '../components/BannerSectionElements/wsIndex.vue'),
    wsNavigationPlaceholders: () => import('../components/MainElements/wsNavPlaceholders.vue'),
    wsNavigationDirectionTip: () => import('../Helpers/wsNavigationDirectionTip')
  },
  data() {
    return {
      isDetailsVisible: false,
      isLoading: false,
      viewRoutes: {
        hair: this.$router.currentRoute.path === '/Hair',
        aesthetic: this.$router.currentRoute.path === '/Aesthetic',
        biotricologia: this.$router.currentRoute.path === '/Biotricologia',
        browlash: this.$router.currentRoute.path === '/Browlash',
        nail: this.$router.currentRoute.path === '/Nail',
        facial: this.$router.currentRoute.path === '/Facial'
      },
      // Page background colors
      backgroundColor: {
        hair: 'linear-gradient(120deg, #fff 30%, #f9caa7)',
        aesthetic: 'linear-gradient(-120deg, #e99b9a 20%, #f9caa7)',
        biotricologia: 'linear-gradient(120deg, #e99b9a 20%, #e6b9bf 80%)',
        browlash: 'linear-gradient(60deg, #e6b9bf 20%, #9f8189 80%)',
        nail: 'linear-gradient(120deg, #9f8189 10%, #f3abb6)',
        facial: 'linear-gradient(120deg, #f3abb6 20%, #ffcad4)'
      },
      // Page banners
      pageBanner: {
        hair: '.wsBanner--hair',
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
      if (this.viewRoutes.hair) { // Hair view background color
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
    toLeft() { // Sliding Banner to left
      let translateX = 'translateX(-150%)'
      if (this.viewRoutes.hair) { // Sliding Hair Banner
        const banner = document.querySelector(this.pageBanner.hair)
        banner.style.transform = translateX
        this.$router.push('/Aesthetic')
      } else if (this.viewRoutes.aesthetic) { // Sliding Aesthetics Banner
        const banner = document.querySelector(this.pageBanner.aesthetic)
        banner.style.transform = translateX
        this.$router.push('/Biotricologia')
      } else if (this.viewRoutes.biotricologia) { // Sliding Biotricologia Banner
        const banner = document.querySelector(this.pageBanner.biotricologia)
        banner.style.transform = translateX
        this.$router.push('/Browlash')
      } else if (this.viewRoutes.browlash) { // Sliding BrowLash Banner
        const banner = document.querySelector(this.pageBanner.browlash)
        banner.style.transform = translateX
        this.$router.push('/Nail')
      } else if (this.viewRoutes.nail) { // Sliding Nail Banner
        const banner = document.querySelector(this.pageBanner.nail)
        banner.style.transform = translateX
        this.$router.push('/Facial')
      }
    },
    toRight() { // Sliding Banner to right
      let translateX = 'translateX(150%)'
      if (this.viewRoutes.aesthetic) { // Sliding Aesthetics Banner
        const banner = document.querySelector(this.pageBanner.aesthetic)
        banner.style.transform = translateX
        this.$router.push('/Hair')
      } else if (this.viewRoutes.biotricologia) { // Sliding Biotricologia Banner
        const banner = document.querySelector(this.pageBanner.biotricologia)
        banner.style.transform = translateX
        this.$router.push('/Aesthetic')
      } else if (this.viewRoutes.browlash) { // Sliding BrowLash Banner
        const banner = document.querySelector(this.pageBanner.browlash)
        banner.style.transform = translateX
        this.$router.push('/Biotricologia')
      } else if (this.viewRoutes.nail) { // Sliding Nail Banner
        const banner = document.querySelector(this.pageBanner.nail)
        banner.style.transform = translateX
        this.$router.push('/Browlash')
      } else if (this.viewRoutes.facial) { // Sliding Facial Banner
        const banner = document.querySelector(this.pageBanner.facial)
        banner.style.transform = translateX
        this.$router.push('/Nail')
      }
    },
    startLoading() { // Start loading animation
      this.isLoading = true
      setTimeout(() => this.isLoading = false, 1000)
    },
    open() { // On opening Bottom Sheet
      this.isDetailsVisible = true
    }
  },
  mounted() {
    this.setBackground()
    this.startLoading()
    this.isDetailsVisible = false
  },
  beforeUpdate() {
  },

}
