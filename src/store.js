import { reactive } from "vue";

export const store = reactive({
    vaPage: {
        navElements: [
            {
                name: "Home",
                active: true
            }, {
                name: "About",
                active: false
            }, {
                name: "Services",
                active: false,
                dropdown: true
            }, {
                name: "Journal",
                active: false
            }, {
                name: "Contact",
                active: false
            },
        ],
        slogan: "Independent professional who works remotely to help with your business.",
    }
});