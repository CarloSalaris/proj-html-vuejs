<script>
import { store } from "../store.js";

import NavContainer from './NavContainer.vue'

export default {
    name: 'PageFooter',
    components: {
        NavContainer,
    },
    data() {
        return {
            store,
        }
    },
    props: {
        msg: String,
    },
}
</script>

<template>
    {{ msg }}
    <NavContainer msg="NavContainer" :menuElements="store.navMenu.elements" />

    <!-- LEFT BLOCK -->
    <!-- TITLE slogan -->
    <!-- BUTTON 1 -->
    <!-- Copyright -->
</template>

<style lang="scss" scoped></style>