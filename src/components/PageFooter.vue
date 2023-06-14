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
                <h3>{{ slogan }}</h3>
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
        <!-- FIXED ELEMENTS -->
        <!-- back-home arrow -->
        <span class="backHome">
            <a href=""><i class="fa-solid fa-chevron-up"></i></a>
        </span>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

footer {
    height: 550px;
    background-image: url("../assets/images/bg/footer-bg-1.svg");
    background-size: cover;
    background-position: center;

    .block {
        width: 55%;
    }
}

.backHome {
    position: fixed;
    bottom: 0;
    left: 60px;
    padding: 5px 15px;
    background-color: $iconBgGray;
    font-size: .8rem;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;


}
</style>