import { reactive } from "vue";

export const store = reactive({
    vaPage: {
        navElements: [
            {
                name: "Home",
                dropdown: false,
            }, {
                name: "About",
                dropdown: false,
            }, {
                name: "Services",
                dropdown: true,
            }, {
                name: "Journal",
                dropdown: false,
            }, {
                name: "Contact",
                dropdown: false,
            },
        ],
        slogan: "Independent professional who works remotely to help with your business.",
    }
});