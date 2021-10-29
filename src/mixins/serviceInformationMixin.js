export const serviceInformationMixin = {
    data() {
        return {
            // wsHair START
            wsHairInformation: [
                {
                    image: require("../assets/img/collaborations/nashiArgan.webp"),
                    alt: "Nashi Argan",
                    url: "https://www.nashiargan.it/en/homepage/",
                    introduction: "We are more than happy to tell you, that we are an official Nashi Argan partner salon.",
                    story: "Nashi Argan is the 100% made in Italy cosmetic brand that listens to your requests and meets your needs with passion and efficiency! The result is an exclusive collection of Haircare and Skincare products designed to offer a tailor-made experience for women (and men) that put simplicity, care and professional results first."
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
                    story: "Dr Nim Aesthetics specialises in anti-ageing aesthetic procedures that enhance your natural beauty and restore your youthful appearance. Every aesthetic procedure is non- surgical and doctor - led, using only the very best certified products to get the results you’re looking for. Her treatments target cosmetic concerns, including fine lines, wrinkles and excessive sweating."
                }
            ],
            // wsAesthetic END

            // wsBiotricologia START
            wsBiotricologiaInformation: [
                {
                    image: require("../assets/img/collaborations/biotricologia_wide.webp"),
                    alt: "Biotricologia UK",
                    url: "https://www.biotricologia.com/en/active-biotricologia/biotricologia/",
                    introduction: "We are pleased to invite you to our Biotricologia® treatments.",
                    story: "Biotricologia® is a pioneer and patented method for the diagnosis and treatment of hair and scalp problems. It acts on the living part of hair, focusing on the hair follicle and the skin layer that forms the scalp. Biotricologia® has developed a brand of dedicated health care products scalp and to treat disorders such as alopecia, seborrhoea, peeling or sensitivity, among others. There are shampoos, lotions and specific concentrates: a solution for every type of hair and scalp problem."
                }
            ],
            // wsBiotricologia END

            // wsBrowLash START
            wsBrowLashInformation: [
                {
                    image: require("../assets/img/collaborations/brow_lash.png"),
                    alt: "Bronsun, BrowXena, InLei - Eccelenza Made in Italy",
                    introduction: "We are focusing on the use of top quality brands for our Brow and Lash services.",
                    story: ""
                }
            ],
            // wsBrowLash END

            // wsNail START
            wsNailInformation: [
                {
                    image: require("../assets/img/collaborations/indigoNails.webp"),
                    alt: "Indigo Nails",
                    url: "https://www.indigo-nails.co.uk/",
                    introduction: "We are proud to announce, that Indigo Nail is the #1 brand we use in our salon.",
                    story: "Indigo focuses on the highest quality raw materials and know-how, resulting directly from the experience of award-winning nail styling instructors in international competitions. Thanks to its rapid development, today it is a leading  manufacturer of products for gel polish manicure. Its portfolio presents a wide range of gel polishes, nail care accessories and Home Spa cosmetics. We do also offer a variety of Home Spa cosmetics for purchase - for your at-home spa experience."
                }
            ],
            // wsNail END

            // wsFacial START
            wsFacialInformation: [
                // {
                //     image: require(""),
                //     alt: "",
                //     url: "",
                //     introduction: "",
                //     story: ""
                // }
            ],
            // wsFacial END  
        }
    },
    computed: {
        relevantInformation() {
            if (this.$router.currentRoute.name === "Hairstyling") {
                return this.wsHairInformation
            } else if (this.$router.currentRoute.name === "Aesthetics") {
                return this.wsAestheticInformation
            } else if (this.$router.currentRoute.name === "Biotricologia") {
                return this.wsBiotricologiaInformation
            } else if (this.$router.currentRoute.name === "BrowsNLashes") {
                return this.wsBrowLashInformation
            } else if (this.$router.currentRoute.name === "Nails") {
                return this.wsNailInformation
            } else if (this.$router.currentRoute.name === "Facials") {
                // return this.wsFacialInformation
                return
            }
        }
    }
}