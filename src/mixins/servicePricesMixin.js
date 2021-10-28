export const servicePricesMixin = {
    data() {
        return {
            // wsHair START
            wsHairPrices: [
                {
                    name: "Blow dry",
                    price: "20"
                },
                {
                    name: "Cut & Blow dry",
                    range: "from",
                    // price: "25-35"
                    price: "25"
                },
                {
                    name: "Nashi Filler Theraphy",
                    range: "from",
                    // price: "35-55"
                    price: "35"
                },
                {
                    name: "Olaplex treatment*",
                    range: "from",
                    // price: "30-40"
                    price: "30"
                },
                {
                    name: "Sombre",
                    range: "from",
                    // price: "60-80"
                    price: "60"
                },
                {
                    name: "Dying",
                    range: "from",
                    // price: "50-75"
                    price: "50"
                },
                {
                    name: "Ombre",
                    range: "from",
                    // price: "55-80"
                    price: "55"
                },
                {
                    name: "Highlights plus Color tone",
                    range: "from",
                    // price: "55-80"
                    price: "55"
                },
                {
                    name: "Keratin treatment",
                    range: "from",
                    // price: "60-120"
                    price: "60"
                },
                {
                    name: "Kids haircut",
                    price: "10"
                },
                {
                    name: "Gents haircut",
                    range: "from",
                    // price: "10-15"
                    price: "10"
                },
                {
                    header: "Extras"
                },
                {
                    name: "*additional Olaplex treatment",
                    price: "10"
                }
            ],
            // wsHair END

            // wsAesthetics START
            wsAestheticPrices: [
                //Anti-wrinkle
                {
                    header: "Anti-Wrinkle treatment"
                },
                {
                    name: "1 area",
                    price: "120"
                },
                {
                    name: "2 areas",
                    price: "170"
                },
                {
                    name: "3 areas",
                    price: "220"
                },
                {
                    name: "4 areas",
                    price: "260"
                },
                {
                    name: "Mens additional bottox",
                    range: "per area /",
                    price: "50"
                },
                {
                    name: "Gummy smile",
                    price: "150"
                },
                {
                    name: "Lip flip",
                    price: "150"
                },
                {
                    name: "Bunny Lines",
                    price: "150"
                },
                {
                    name: "Dimpled / Pebbled Chin (Orange Peel Skin)",
                    price: "170"
                },
                {
                    name: "Peri-oral lines (lipstick lines, smoker lines)",
                    price: "150"
                },
                {
                    name: "Excessive sweating (Hyperhidrosis)",
                    price: "300"
                },
                {
                    name: "Bruxism / Teeth grinding / TMJ disorder",
                    price: "220"
                },
                {
                    name: "Facial Slimming/Masseter",
                    price: "220"
                },
                {
                    name: "Nefertiti Neck Lift / Platysmal Bands",
                    price: "220"
                },
                {
                    name: "Migraine treatment",
                    price: "500"
                },
                // Dermal
                {
                    header: "Dermal filler"
                },
                {
                    name: "Lip enhancement (needle / cannula)",
                    range: ["0.5ml", "1ml"],
                    prices: [
                        "160",
                        "200"
                    ]
                },
                {
                    name: "Nasiolabial lines (nose to mouth lines)",
                    price: "200"
                },
                {
                    name: "Marionettes lines (mouth to chine lines)",
                    price: "200"
                },
                {
                    name: "Peri-oral lines (lipstick lines, smokers lines)",
                    price: "200"
                },
                {
                    name: "Cheek augmentation",
                    range: ["1ml", "2ml", "3ml", "4ml"],
                    prices: [
                        "200",
                        "300",
                        "400",
                        "480"
                    ]
                },
                {
                    name: "Jawline augmentation",
                    range: ["2ml", "3ml", "4ml"],
                    prices: [
                        "300",
                        "400",
                        "480"
                    ]
                },
                {
                    name: "Chin augmentation",
                    range: ["1ml", "2ml", "3ml"],
                    prices: [
                        "200",
                        "300",
                        "400"
                    ]
                },
                // Skin
                {
                    header: "Skin treatment"
                },
                {
                    name: "Profhilo - 1 treatment",
                    price: "250"
                },
                {
                    name: "Profhilo - Full course (2 treatments, 4 weeks apart)",
                    price: "400"
                },
                {
                    name: "Sunekos",
                    range: "from",
                    price: "180"
                },
                {
                    name: "Platelet rich plasma (PRP) - facial",
                    range: "from",
                    price: "180"
                },
                {
                    name: "Platelet rich plasma (PRP) - hair loss treatment",
                    range: "from",
                    price: "180"
                },
                {
                    name: "Thread Vein Removal",
                    range: "from",
                    price: "180"
                },
                // Package
                {
                    header: "Bespoke Facial Package"
                },
                {
                    name: "Tailored to your needs - please enquire for more information"
                }
            ],
            // wsAesthetics END

            // wsBiotricologia START
            wsBiotricologiaPrices: [
                {
                    name: "Consultation",
                    price: "19"
                },
                {
                    name: "Consultation + Treatment",
                    price: "59"
                }
            ],
            // wsBiotricologia END

            // wsBrowLash START
            wsBrowLashPrices: [
                // Eyebrows
                {
                    header: "Eyebrow treatment(s)"
                },
                {
                    name: "Eyebrow shaping",
                    price: "10"
                },
                {
                    name: "Eyebrow shaping and mustache (upper lip) hair removal",
                    price: "15"
                },
                {
                    name: "Eyebrow shaping with epilation (on selected face area)",
                    price: "20"
                },
                {
                    name: "Eyebrow tinting (without shaping)",
                    price: "15"
                },
                {
                    name: "Eyebrow tinting (with shaping)",
                    price: "20"
                },
                {
                    name: "Eyebrow styling with tint and shaping",
                    price: "30"
                },
                {
                    name: "Henna eyebrow styling and shaping",
                    price: "30"
                },
                {
                    name: "Eyebrow lamination and shaping (without tinting)",
                    price: "30"
                },
                {
                    name: "Eyebrow lamination and shaping (with tinting)",
                    price: "45"
                },
                {
                    name: "Eyebrow lamination and shaping (with tinting and botox)",
                    price: "60"
                },
                {
                    name: "Eyebrow botox",
                    range: "1 treatment",
                    price: "15"
                },
                {
                    name: "Eyebrow botox - nutritional therapy (for hair growth)",
                    range: "5 treatments",
                    price: "65"
                },
                // Permanent Eyebrow Makeup
                {
                    header: "Permanent Eyebrow Makeup"
                },
                {
                    name: "Permanent makeup for eyebrows",
                    price: "199",
                },
                {
                    name: "Touch up (correction - compulsory after 6 weeks)",
                    price: "50",
                },
                {
                    name: "Color refreshment (after 1-2 years)",
                    price: "120",
                },
                // Eyelashes
                {
                    header: "Eyelash treatment(s)"
                },
                {
                    name: "Eyelash tinting",
                    price: "10"
                },
                {
                    name: "Eyelash lamination (LVL)",
                    price: "40"
                },
                {
                    name: "Eyelash lamination (LVL) (with botox)",
                    price: "55"
                },
                {
                    name: "Eyelash botox",
                    range: "1 treatment",
                    price: "15"
                },
                {
                    name: "Eyelash botox - nutritional therapy (for hair growth, thickening and restoration)",
                    range: "5 treatments",
                    price: "65"
                },
                // Others
                {
                    header: "Other treatment(s)"
                },
                {
                    name: "Hand depilation",
                    price: "25"
                },
                // Packages
                {
                    header: "Treatment packages"
                },
                {
                    package: "Ready to go!",
                    name: "Eyebrow styling with henna / tint & Nourishing mask plus a face massage",
                    price: "55"
                },
                {
                    package: "Wonderlust Girl",
                    name: "Eyebrow styling with henna / tint & lash lamination (LVL)",
                    price: "65"
                },
                {
                    package: "You are Wonderlust!",
                    name: "Eyebrow styling with henna / tint & Eyelash lamination with botox for 'brows and 'lashes plus a Face treatment",
                    price: "55"
                },
                {
                    name: "Eyebrow and Eyelash botox - nutritional therapy (for hair growth, thickening and reconstruction)",
                    range: "5 treatments",
                    price: "140"
                },
                {
                    name: "Eyelash lamination",
                    range: "8 treatments",
                    price: "280"
                }

            ],
            // wsBrowLash END

            // wsNail START
            wsNailPrices: [
                {
                    name: "Simple manicure",
                    price: "15"
                },
                {
                    name: "Japanese manicure",
                    price: "25"
                },
                {
                    name: "Mineral / Protein base",
                    price: "23"
                },
                {
                    name: "Shellac",
                    price: "28"
                },
                {
                    name: "Gel on natural plate",
                    price: "33"
                },
                {
                    name: "Gel extensions",
                    price: "40"
                },
                {
                    name: "Gel infill up to 3 weeks",
                    range: ["Short", "Long"],
                    prices: ["30", "32"]
                },
                {
                    name: "Gel infill up to 4 weeks",
                    range: ["Short", "Long"],
                    prices: ["34", "36"]
                },
                {
                    name: "Pedicure",
                    price: "34"
                },
                {
                    name: "Pedicure + Color",
                    price: "44"
                },
                {
                    name: "Shellac on toes",
                    price: "28"
                },
                {
                    header: "Extras"
                },
                {
                    name: "French manicure",
                    price: "5"
                },
                {
                    name: "Ombre / Babyboomer",
                    price: "4"
                },
                {
                    name: "Crystals",
                    range: "from",
                    price: "2"
                },
                {
                    name: "Nail art (per single nail)",
                    range: "from",
                    price: "1"
                },
                {
                    name: "Nail removal",
                    price: "10"
                },
                {
                    name: "Single nail repair",
                    range: "from",
                    price: "1"
                }
            ],
            // wsNail END

            // wsFacial START
            wsFacialPrices: [
                {
                    name: "Cavitation peeling (facial cleansing)",
                    price: "35"
                },
                {
                    name: "AHA acid treatment plus serum and mask",
                    price: "40"
                },
                {
                    name: "Microneedle mesotherapy",
                    range: ["face", "face, neck", "face, neck, decolletage"],
                    prices: ["65", "80", "95"]
                },
                {
                    name: "FAR-X lifting treatment",
                    price: "50"
                },
                {
                    name: "Face massage plus serum and mask",
                    price: "25"
                },
                // Packages
                {
                    header: "Treatment packages"
                },
                {
                    package: "Ready to go!",
                    name: "Nourishing mask plus a face massage & Eyebrow styling with henna / tint",
                    price: "55"
                },
                {
                    package: "You are Wonderlust!",
                    name: "Face treatment plus Eyebrow styling with henna / tint & Eyelash lamination with botox for 'brows and 'lashes",
                    price: "55"
                },
                {
                    name: "Cavitation peeling",
                    range: "5 treatments",
                    price: "140"
                },
                {
                    name: "AHA acids",
                    range: "5 treatments",
                    price: "160"
                },
                {
                    name: "FAR-X lifting treatment",
                    range: "5 treatments",
                    price: "200"
                },
                {
                    name: "Microneedle mesotherapy (face)",
                    range: "5 treatments",
                    price: "275"
                },
                {
                    name: "Microneedle mesotherapy (face and neck)",
                    range: "5 treatments",
                    price: "350"
                },
                {
                    name: "Microneedle mesotherapy (face, neck and decolletage)",
                    range: "5 treatments",
                    price: "400"
                },
            ]
            // wsFacial END
        }
    },
    computed: {
        relevantDetails() {
            if (this.$router.currentRoute.name === "Hairstyling") {
                return [this.wsHairPrices]
            } else if (this.$router.currentRoute.name === "Aesthetics") {
                return [this.wsAestheticPrices]
            } else if (this.$router.currentRoute.name === "Biotricologia") {
                return [this.wsBiotricologiaPrices]
            } else if (this.$router.currentRoute.name === "BrowsNLashes") {
                return [this.wsBrowLashPrices]
            } else if (this.$router.currentRoute.name === "Nails") {
                return [this.wsNailPrices]
            } else if (this.$router.currentRoute.name === "Facials") {
                return [this.wsFacialPrices]
            }
        }
    }
}