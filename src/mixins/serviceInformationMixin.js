export const serviceInformationMixin = {
    data() {
        return {
            // wsHair START
            wsHairInformation: [
                {
                    image: "",
                    alt: "",
                    story: ""
                }
            ],
            // wsHair END

            // wsAesthetic START
            wsAestheticInformation: [
                {
                    image: require("../assets/img/collaborations/drNim_color.webp"),
                    alt: "Dr. Nim - Aesthetics",
                    url: "https://drnim.co.uk/",
                    introduction: "We are pleased to present our new collaboration with Dr Nim.",
                    story: "Dr Nim Aesthetics specialises in anti-ageing aesthetic procedures that enhance your natural beauty and restore your youthful appearance. Every aesthetic procedure is non- surgical and doctor - led, using only the very best certified products to get the results you’re looking for. Her treatments target cosmetic concerns, including fine lines, wrinkles and excessive sweating. For more information, contact us or check our prices!"
                }
            ],
            // wsAesthetic END

            // wsBiotricologia START
            wsBiotricologiaInformation: [],
            // wsBiotricologia END

            // wsBrowLash START
            wsBrowLashInformation: [],
            // wsBrowLash END

            // wsNail START
            wsNailInformation: [],
            // wsNail END

            // wsFacial START
            wsFacialInformation: [],
            // wsFacial END  
        }
    },
    computed: {
        relevantInformation() {
            if (this.$router.currentRoute.name === "Hairstyling") {
                // return this.wsHairInformation
                return
            } else if (this.$router.currentRoute.name === "Aesthetics") {
                return this.wsAestheticInformation
            } else if (this.$router.currentRoute.name === "Biotricologia") {
                // return this.wsBiotricologiaInformation
                return
            } else if (this.$router.currentRoute.name === "BrowsNLashes") {
                // return this.wsBrowLashInformation
                return
            } else if (this.$router.currentRoute.name === "Nails") {
                // return this.wsNailInformation
                return
            } else if (this.$router.currentRoute.name === "Facials") {
                // return this.wsFacialInformation
                return
            }
        }
    }
}