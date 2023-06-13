<script>
import { store } from "../store.js";

import NavContainer from './NavContainer.vue'

export default {
    name: 'PageFooter',
    components: {
        NavContainer,
    },
    props: {
        slogan: String
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
            <NavContainer btnColor="btn_3" :menuElements="store.vaPage.navElements" />

            <!-- LEFT BLOCK -->

            <div class="block">
                <!-- TITLE slogan -->
                <h4>{{ slogan }}</h4>
                <!-- BUTTON 1 -->
                <button class="btn_1">What is a VA exactly?</button>
                <!-- Copyright -->
                <div class="copyright">
                    &copy; Copyright 2012-2020
                    | Avada Theme by <a href="#">ThemeFusion</a>
                    | All Rights Reserved
                    | Powered by <a href="#">WordPress</a>
                </div>
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

    .block {
        width: 50%;
    }
}
</style>