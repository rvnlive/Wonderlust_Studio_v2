export const serviceInformationMixin = {
    data() {
        return {
            // wsHair START
            wsHairInformation: [
                {
                    image: require("../assets/img/collaborations/nashiArgan_olaplex.webp"),
                    alt: "Nashi Argan, Olaplex",
                    url: null,
                    introduction: "We are more than happy to tell you, that we are an official Nashi Argan partner salon and we are also glad to announce that we are using a well known brand - Olaplex.",
                    story: "Nashi Argan is the 100% made in Italy cosmetic brand that listens to your requests and meets your needs with passion and efficiency! The result is an exclusive collection of Haircare and Skincare products designed to offer a tailor-made experience for women (and men) that put simplicity, care and professional results first.",
                    story2: "Olaplex is the complete solution to repair, rebuild and restore broken hair bonds. This is all thanks to a single molecule: Bis-Aminopropyl Diglycol Dimaleate. This patented ingredient is designed to seek out broken hair bonds in your client’s hair caused by heat, chemical, mechanical and colour damage. How does it work? Olaplex’s six-step process goes beyond the surface by finding single sulphur hydrogen bonds and cross-linking them back together to form disulphide bonds. Olaplex gives all of our customers healthier, stronger and shinier hair with long-lasting results.",
                    brandName: ["Nashi Argan", "Olaplex"],
                    brandURL: ["https://www.nashiargan.it/en/homepage/", "https://uk.olaplex.com/"]
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
                    story: "Dr Nim Aesthetics specialises in anti-ageing aesthetic procedures that enhance your natural beauty and restore your youthful appearance. Every aesthetic procedure is non- surgical and doctor - led, using only the very best certified products to get the results you’re looking for. Her treatments target cosmetic concerns, including fine lines, wrinkles and excessive sweating.",
                    brandName: ["Dr. Nim - Aesthetics"],
                    brandURL: ["https://drnim.co.uk/"]
                }
            ],
            // wsAesthetic END

            // wsBiotricologia START
            wsBiotricologiaInformation: [
                {
                    image: require("../assets/img/collaborations/biotricologia_wide.webp"),
                    alt: "Biotricologia",
                    url: "http://www.biotricologia.com/en/active-biotricologia/biotricologia/",
                    introduction: "We are pleased to invite you to our Biotricologia® treatments.",
                    story: "Biotricologia® is a pioneer and patented method for the diagnosis and treatment of hair and scalp problems. It acts on the living part of hair, focusing on the hair follicle and the skin layer that forms the scalp. Biotricologia® has developed a brand of dedicated health care products scalp and to treat disorders such as alopecia, seborrhoea, peeling or sensitivity, among others. There are shampoos, lotions and specific concentrates: a solution for every type of hair and scalp problem.",
                    brandName: ["Biotricologia"],
                    brandURL: ["http://www.biotricologia.com/en/active-biotricologia/biotricologia/"]
                }
            ],
            // wsBiotricologia END

            // wsBrowLash START
            wsBrowLashInformation: [
                {
                    image: require("../assets/img/collaborations/brow_lash.png"),
                    alt: "Bronsun, BrowXenna, InLei - Eccelenza Made in Italy",
                    url: null,
                    introduction: "We are focusing on the use of top quality brands for our Brows and LVL Lash services.",
                    story: "BRONSUN®️ is the first gel dye with henna effect. Highly pigmented dye tints both hairs and skin, providing a graphic and intense result that lasts up to 7 days on skin and up to 7 weeks on hairs. The ammonia-free formula guarantees a gentle effect on hair structure. 7 bright colors provide an unlimited number of options for creating new shades.",
                    story2: "BX Brow Henna is a bestseller for eyebrow colouring. It not only gives the eyebrows stunning volume and expressive colour, but also helps restore weak and damaged hairs. BX Brow Henna provides optimal colouring of eyebrows and skin with a soft permanent makeup effect without the “reddish” impregnation. It consists of natural substances that help strengthen the hairs with each procedure, and contribute to the restoration of the eyebrows’ natural shape. The phenomenal fortitude of the product’s ingredients allows the henna to stay on the hairs for up to six weeks.",
                    story3: "The World's Number 1 professional product for Lash Stylists and Brow Artists is InLei®️. InLei®️ is the first 100% Italian-made brand of eyelash and eyebrow products. They are professionals in the eyelash and eyebrow industry. Over the years, they developed products for lash and brow lamination and tinting intended for professional use. Their Lash Filler treatment for eyelash lamination is the first globally with proven effectiveness in hair thickening. Their Brow Bomber treatment for eyebrow lamination revolutionized the world of brow artists.",
                    brandName: ["BRONSUN®️", "BrowXenna", "InLei - Eccelenza Made in Italy"],
                    brandURL: ["https://bronsunpro.com/", "https://browxenna.com/en/", "https://inlei.it/en/"]
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
                    story: "Indigo focuses on the highest quality raw materials and know-how, resulting directly from the experience of award-winning nail styling instructors in international competitions. Thanks to its rapid development, today it is a leading  manufacturer of products for gel polish manicure. Its portfolio presents a wide range of gel polishes, nail care accessories and Home Spa cosmetics. We do also offer a variety of Home Spa cosmetics for purchase - for your at-home spa experience.",
                    brandName: ["Indigo Nails"],
                    brandURL: ["https://www.indigo-nails.co.uk/"]
                }
            ],
            // wsNail END

            // wsFacial START
            wsFacialInformation: [
                {
                    image: require("../assets/img/collaborations/dermo_pen-bielenda.webp"),
                    alt: "Dermo Pen Q1, Bielenda",
                    url: null,
                    introduction: "We can smooth wrinkles, improve skin texture and tone and help prevent the tell-tale signs of ageing with our facial non-invasive treatments.",
                    story: "DermaPen is a skin micro-needling treatment with minimum downtime which promotes scarless healing and natural collagen production in the skin to improve the appearance of scars, acne scarring, stretch marks, wrinkles, pigmentation and rejuvenate the skin.",
                    story2: "Cosmetics inspired by nature. That is the Polish brand Bielenda which uses top-quality natural ingredients. Anyone who dreams of beautiful skin and hair, while also caring about cosmetic formulas and the environment, will be interested in their products. Bielenda beauty takes its name after its founder, Barbara Bielenda, a graduate of the Faculty of Chemistry at Gdansk University, who founded the brand in 1990. Before their release, Bielenda products go through a rigorous dermatological testing and have to show high efficacy. Their exceptionally gentle formulas make them suitable even for people with allergies. Bielenda is also the first Polish brand to start offering products with an extract from the rare Ginkgo biloba tree. The wide range of Bielenda products includes skin care, body care and hair care – from face creams, makeup removers and shower gels to Bielenda Sun Care, shampoos and scrubs. Some of the most popular products are Bielenda Magic Bronze self-tanning mousse and Bielenda Magic Water which can be used as a makeup primer, a highlighter or a refreshing product. If you’re struggling with problematic skin, you should definitely take a look at the Bielenda Dr Medica Acne range.",
                    brandName: ["DermaPen", "Bielenda"],
                    brandURL: ["https://dermapen.com/", "https://bielenda.pl/en"]
                }
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
            } else if (this.$router.currentRoute.name === "Brows & LVL Lashes") {
                return this.wsBrowLashInformation
            } else if (this.$router.currentRoute.name === "Nails") {
                return this.wsNailInformation
            } else if (this.$router.currentRoute.name === "Facials") {
                return this.wsFacialInformation
            }
        }
    }
}