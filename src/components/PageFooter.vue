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

            <div>
                <!-- TITLE slogan -->
                <h4>SLOGAN</h4>
                <!-- BUTTON 1 -->
                <button class="btn_1">What is a VA exactly?</button>
                <!-- Copyright -->
            </div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 655px;
    background-image: url("../assets/images/bg/footer-bg-1.svg");
    background-size: cover;
    background-position: center;
}
</style>