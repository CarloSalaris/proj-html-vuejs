import { reactive } from "vue";

export const store = reactive({
    vaPage: {
        navElements: [
            {
                name: "Home",
                active: true,
                dropdown: false,
            }, {
                name: "About",
                active: false,
                dropdown: false,
            }, {
                name: "Services",
                active: false,
                dropdown: true,
            }, {
                name: "Journal",
                active: false,
                dropdown: false,
            }, {
                name: "Contact",
                active: false,
                dropdown: false,
            },
        ],
        slogan: "Independent professional who works remotely to help with your business.",
    }
});