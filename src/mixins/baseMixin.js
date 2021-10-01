export const baseMixin = {
    data() {
        return {
            viewRoutes: {
                hair: this.$router.currentRoute.path === "/Hair",
                aesthetic: this.$router.currentRoute.path === "/Aesthetic",
                biotricologia: this.$router.currentRoute.path === "/Biotricologia",
                browlash: this.$router.currentRoute.path === "/Browlash",
                nail: this.$router.currentRoute.path === "/Nail",
                facial: this.$router.currentRoute.path === "/Facial"
            },
            // Page background colors
            backgroundColor: {
                hair: "#fbeee6",
                aesthetic: "#e99b9a",
                // "#f2dcdf",
                // "#eed0d4",
                biotricologia: "#e6b9bf",
                browlash: "#9f8189",
                nail: "#f3abb6",
                facial: "#ffcad4",
                // "#ffe5d8"
            },
            // Page banners
            pageBanner: {
                hair: ".wsBanner--hair",
                aesthetic: ".wsBanner--aesthetic",
                biotricologia: ".wsBanner--biotricologia",
                browlash: ".wsBanner--browlash",
                nail: ".wsBanner--nail",
                facial: ".wsBanner--facial"
            }
        }
    },
    methods: {
        setBackground() { // Setting page background color
            if (this.viewRoutes.hair) { // Hair view background color
                document.body.style.backgroundColor = this.backgroundColor.hair;
                document.body.style.transition = "background-color 500ms ease-in-out";
            }
            else if (this.viewRoutes.aesthetic) { // Aesthetics view background color
                document.body.style.backgroundColor = this.backgroundColor.aesthetic;
                document.body.style.transition = "background-color 500ms ease-in-out";
            }
            else if (this.viewRoutes.biotricologia) { // Biotricologia view background color
                document.body.style.backgroundColor = this.backgroundColor.biotricologia;
                document.body.style.transition = "background-color 500ms ease-in-out";
            }
            else if (this.viewRoutes.browlash) { // BrowLash view background color
                document.body.style.backgroundColor = this.backgroundColor.browlash;
                document.body.style.transition = "background-color 500ms ease-in-out";
            }
            else if (this.viewRoutes.nail) { // Nail view background color
                document.body.style.backgroundColor = this.backgroundColor.nail;
                document.body.style.transition = "background-color 500ms ease-in-out";
            }
            else if (this.viewRoutes.facial) { // Facial view background color
                document.body.style.backgroundColor = this.backgroundColor.facial;
                document.body.style.transition = "background-color 500ms ease-in-out";
            }
        },
        toLeft() { // Sliding Banner to left
            if (this.viewRoutes.hair) { // Sliding Hair Banner
                let banner = document.querySelector(this.pageBanner.hair);
                banner.style.transform = "translateX(-150%)";
                this.$router.push("/Aesthetic");
            }
            else if (this.viewRoutes.aesthetic) { // Sliding Aesthetics Banner
                let banner = document.querySelector(this.pageBanner.aesthetic);
                banner.style.transform = "translateX(-150%)";
                this.$router.push("/Biotricologia");
            }
            else if (this.viewRoutes.biotricologia) { // Sliding Biotricologia Banner
                let banner = document.querySelector(this.pageBanner.biotricologia);
                banner.style.transform = "translateX(-150%)";
                this.$router.push("/Browlash");
            }
            else if (this.viewRoutes.browlash) { // Sliding BrowLash Banner
                let banner = document.querySelector(this.pageBanner.browlash);
                banner.style.transform = "translateX(-150%)";
                this.$router.push("/Nail");
            }
            else if (this.viewRoutes.nail) { // Sliding Nail Banner
                let banner = document.querySelector(this.pageBanner.nail);
                banner.style.transform = "translateX(-150%)";
                this.$router.push("/Facial");
            }
        },
        toRight() { // Sliding Banner to right
            if (this.viewRoutes.aesthetic) { // Sliding Aesthetics Banner
                const banner = document.querySelector(this.pageBanner.aesthetic);
                banner.style.transform = "translateX(150%)";
                this.$router.push("/Hair");
            }
            else if (this.viewRoutes.biotricologia) { // Sliding Biotricologia Banner
                const banner = document.querySelector(this.pageBanner.biotricologia);
                banner.style.transform = "translateX(150%)";
                this.$router.push("/Aesthetic");
            }
            else if (this.viewRoutes.browlash) { // Sliding BrowLash Banner
                const banner = document.querySelector(this.pageBanner.browlash);
                banner.style.transform = "translateX(150%)";
                this.$router.push("/Biotricologia");
            }
            else if (this.viewRoutes.nail) { // Sliding Nail Banner
                const banner = document.querySelector(this.pageBanner.nail);
                banner.style.transform = "translateX(150%)";
                this.$router.push("/Browlash");
            }
            else if (this.viewRoutes.facial) { // Sliding Facial Banner
                const banner = document.querySelector(this.pageBanner.facial);
                banner.style.transform = "translateX(150%)";
                this.$router.push("/Nail");
            }
        },
        // collapseOpen() {
        //     this.isDetailsVisible = true;
        //     document.body.style.scrollBehavior = "auto"
        //     document.body.style.transition = "all 1000ms ease-in"
        //     window.setTimeout(function () {
        //         document.body.style.transition = ""
        //     }, 3000)
        // },
        // collapseClosed() {
        //     this.isDetailsVisible = false;
        // },
        // scrollTo() {
        //     if (this.collapseOpen) {
        //         window.setTimeout(function () {
        //             const element = document.getElementById("main-collapse");
        //             element.scrollIntoView({
        //                 // block: "nearest"
        //                 inline: "start"
        //             });
        //         }, 200);
        //     }
        // },
        open() {
            this.$refs.visibleDetails.open()
        },
        close() {
            this.$refs.visibleDetails.close()
        },
        smooth() {
            document.body.style.scrollBehavior = "smooth";
            const panX = document.querySelector('.bottom-sheet__content')
            panX.style.touchAction = "pan-y"
        },
    },
    mounted() {
        this.setBackground()
        this.smooth()
    },
}