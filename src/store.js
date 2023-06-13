import { reactive } from "vue";

export const store = reactive({
    navMenu: {
        elements: [
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
        ]
    }
});