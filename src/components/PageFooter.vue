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
    }
}
</script>

<template>
    <footer class="bg_blue">
        <NavContainer msg="NavContainer" :menuElements="store.navMenu.elements" />
        <!-- LEFT BLOCK -->
        <!-- TITLE slogan -->
        <!-- BUTTON 1 -->
        <!-- Copyright -->
    </footer>
</template>

<style lang="scss" scoped></style>