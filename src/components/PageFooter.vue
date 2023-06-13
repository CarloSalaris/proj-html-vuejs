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
        <div class="container_centered">
            <NavContainer btnColor="btn_3" :menuElements="store.navMenu.elements" />
            <!-- LEFT BLOCK -->
            <!-- TITLE slogan -->
            <!-- BUTTON 1 -->
            <!-- Copyright -->
        </div>
    </footer>
</template>

<style lang="scss" scoped></style>