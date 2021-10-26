export const servicePricesMixin = {
    data() {
        return {
            // wsHair START
            wsHairPrices: [
                {
                    name: "Blow dry",
                    price: "£20"
                },
                {
                    name: "Cut & Blow dry",
                    price: "£25-£35"
                },
                {
                    name: "Nashi Filler Theraphy",
                    price: "£35-£55"
                },
                {
                    name: "Olaplex treatment",
                    price: "£30-£40*"
                },
                {
                    name: "Sombre",
                    price: "£60-£80"
                },
                {
                    name: "Dying",
                    price: "£50-£75"
                },
                {
                    name: "Ombre",
                    price: "£55-£80"
                },
                {
                    name: "Highlights plus Color tone",
                    price: "£55-£80"
                },
                {
                    name: "Keratin treatment",
                    price: "£60-£120"
                },
                {
                    name: "Kids haircut",
                    price: "£10"
                },
                {
                    name: "Gents haircut",
                    price: "£10-£15"
                },
                {
                    name: "*additional Olaplex treatment",
                    price: "£10"
                }
            ],
            // wsHair END

            // wsAesthetics START
            wsAestheticPrices: [],
            // wsAesthetics END

            // wsBiotricologia START
            wsBiotricologiaPrices: [
                {
                    name: "Consultation",
                    price: "£19"
                },
                {
                    name: "Consultation + Treatment",
                    price: "£59"
                }
            ],
            // wsBiotricologia END

            // wsBrowLash START
            wsBrowLashPrices: [],
            // wsBrowLash END

            // wsNail START
            wsNailPrices: [
                {
                    name: "Simple manicure",
                    price: "£15"
                },
                {
                    name: "Japanese manicure",
                    price: "£25"
                },
                {
                    name: "Mineral/Protein base",
                    price: "£23"
                },
                {
                    name: "Shellac",
                    price: "£28"
                },
                {
                    name: "Gel extensions",
                    price: "£40"
                },
                {
                    name: "Gel infill up to 3 weeks (Short / Long)",
                    price: "£30 / £32"
                },
                {
                    name: "Gel infill up to 4 weeks (Short / Long)",
                    price: "£34 / £36"
                },
                {
                    name: "Pedicure",
                    price: "£34"
                },
                {
                    name: "Pedicure + Color",
                    price: "£44"
                },
                {
                    name: "Shellac on toes",
                    price: "£28"
                }
            ],
            wsNailExtras: [
                {
                    name: "* French manicure",
                    price: "£5"
                },
                {
                    name: "* Ombre / Babyboomer",
                    price: "£4"
                },
                {
                    name: "* Crystals",
                    price: "from £2"
                },
                {
                    name: "* Nail art (per single nail)",
                    price: "£1 - £5"
                },
                {
                    name: "* Nail removal",
                    price: "£10"
                },
                {
                    name: "* Single nail repair",
                    price: "£1 - £4"
                }
            ],
            // wsNail END

            // wsFacial START
            wsFacialPrices: []
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
                return [this.wsNailPrices, this.wsNailExtras]
            } else if (this.$router.currentRoute.name === "Facials") {
                return [this.wsFacialPrices]
            }
        }
    }
}