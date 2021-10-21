export const serviceMixin = {
    data() {
        return {
            wsServices: [
                {
                  target: "/Hair",
                  imageUrl: require("../assets/img/model_img/navigation/1.webp"),
                  imageAlt: "Young lady with a snow white hair color",
                  imageClass: "wsSliderNavigation-main__item--hair fadeIn",
                  serviceName: "Hairstyling",
                  serviceId: "Hair",
                },
                {
                  target: "/Aesthetic",
                  imageUrl: require("../assets/img/model_img/navigation/2.webp"),
                  imageAlt: "Woman before aesthetic treatment - needles around her face",
                  imageClass: "wsSliderNavigation-main__item--aesthetic fadeIn",
                  serviceName: "Aesthetics",
                  serviceId: "Aesthetic",
                },
                {
                  target: "/Biotricologia",
                  imageUrl: require("../assets/img/model_img/navigation/3.webp"),
                  imageAlt: "Woman with hair mask on",
                  imageClass: "wsSliderNavigation-main__item--biotricologia",
                  serviceName: "Biotricologia",
                  serviceId: "Biotricologia",
                },
                {
                  target: "/Browlash",
                  imageUrl: require("../assets/img/model_img/navigation/4.webp"),
                  imageAlt: "Perfectly shaped eyebrows and lifted eyelashes",
                  imageClass: "wsSliderNavigation-main__item--browlash",
                  serviceName: "Brows & Lashes",
                  serviceId: "BrowLash",
                },
                {
                  target: "/Nail",
                  imageUrl: require("../assets/img/model_img/navigation/5.webp"),
                  imageAlt: "Fingers with solid but wonderful french nails",
                  imageClass: "wsSliderNavigation-main__item--nail",
                  serviceName: "Nails",
                  serviceId: "Nail",
                },
                {
                  target: "/Facial",
                  imageUrl: require("../assets/img/model_img/navigation/6.webp"),
                  imageAlt: "Tanned girl before facial treatment",
                  imageClass: "wsSliderNavigation-main__item--facial",
                  serviceName: "Facials",
                  serviceId: "Facial",
                },
              ],
        }
    }
}