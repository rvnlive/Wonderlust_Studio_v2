export const serviceImagesMixin = {
    data() {
        return {
            // wsHair START
            wsHair: [
                {
                    image: require("../assets/img/service_examples/hair/1.webp"),
                    alt: "Girl with rainbow color hair. Crazy colors",
                    message: "#CrazyColors - anything you imagine!",
                },
                {
                    image: require("../assets/img/service_examples/hair/2.webp"),
                    alt: "Girl with colored hair. Purple actually. We dye even to purple.",
                    message: "Hair dying - choose any color!",
                },
                {
                    image: require("../assets/img/service_examples/hair/3.webp"),
                    alt: "Lady with stylish glasses and a fancy, short hair. Tell us your desire and we cut it.",
                    message: "We like shortcuts... Short haircuts, I mean!",
                },
                {
                    image: require("../assets/img/service_examples/hair/4.webp"),
                    alt: "Girl with dark, curly styled hair.",
                    message: "Curly style? - Oooouu yesss!",
                },
                {
                    image: require("../assets/img/service_examples/hair/5.webp"),
                    alt: "Girl with colored hair. Wild.",
                    message: "Wild style - show your unique self!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                }
            ],
            // wsHair END

            // wsAesthetic START
            wsAesthetic: [
                {
                    image: require("../assets/img/service_examples/aesthetic/1.webp"),
                    alt: "Young woman with needle near her eyebrow - before aesthetic treatment.",
                    message: "Choose our Sunekos treatment",
                },
                {
                    image: require("../assets/img/service_examples/aesthetic/2.webp"),
                    alt: "Woman with a doctors hand around her head - taking measurement before treatment.",
                    message: "Take a look at our prices and choose one for your need.",
                },
                {
                    image: require("../assets/img/service_examples/aesthetic/3.webp"),
                    alt: "Woman with needle near her lips - before lip filler treatment.",
                    message: "Lips to talk about.",
                },
                {
                    image: require("../assets/img/service_examples/aesthetic/4.webp"),
                    alt: "Woman with needle near her armpit - before treatment against excessive sweating (hyperhidrosis).",
                    message: "Having problems with sweating? Choose our treatment against it.",
                },
            ],
            // wsAesthetic END

            // wsBiotricologia START
            wsBiotricologia: [
            ],
            // wsBiotricologia END

            // wsBrowLash START
            wsBrowLash: [
                {
                    image: require("../assets/img/service_examples/browlash/1.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/browlash/2.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/browlash/3.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/browlash/4.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/browlash/5.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/browlash/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
            ],
            // wsBrowLash END

            // wsNail START
            wsNail: [
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
            ],
            // wsNail END

            // wsFacial START
            wsFacial: [
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
                {
                    image: require("../assets/img/service_examples/hair/6.webp"),
                    alt: "Girl with dark, straight hair. Simple, wonderful.",
                    message: "Simple, wonderful. Or simply wonderful!",
                },
            ]
            // wsFacial END
        }
    },
    computed: {
        relevantImages() {
            if (this.$router.currentRoute.name === "Hairstyling") {
                return this.wsHair
            } else if (this.$router.currentRoute.name === "Aesthetics") {
                return this.wsAesthetic
            } else if (this.$router.currentRoute.name === "Biotricologia") {
                return this.wsBiotricologia
            } else if (this.$router.currentRoute.name === "BrowsNLashes") {
                return this.wsBrowLash
            } else if (this.$router.currentRoute.name === "Nails") {
                return this.wsNail
            } else if (this.$router.currentRoute.name === "Facials") {
                return this.wsFacial
            }
        }
    }
}