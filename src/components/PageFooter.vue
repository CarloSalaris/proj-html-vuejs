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

        <!-- chat -->
        <!-- chat button -->
        <div class="chatButton">
            <i class="fa-solid fa-message"></i>
        </div>
        <!-- chat window -->
        <div class="chatWindow">
            <p>
                This is a free HubSpot live chat.
                You can create your own chat flows and engage your customers with Avada & HubSpot!
            </p>
            <span class="closeX">
                <i class="fa-solid fa-xmark"></i>
            </span>
            <span class="logo_small">
                <img src="../assets/images/icons/logo.png" alt="">
            </span>
        </div>


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

.chatButton {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    right: 15px;
    bottom: 15px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: $orange;
    color: #ffffff;
    font-size: 1.4rem;
    cursor: pointer;
}

.chatWindow {
    position: fixed;
    width: 200px;
    right: 15px;
    bottom: 90px;
    background-color: #ffffff;
    color: $iconGray;
    padding: 25px 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(128, 128, 128, 0.534);

    p {
        font-size: .8rem;
    }

    .closeX {
        position: absolute;
        right: 10px;
        top: 5px;
        cursor: pointer;

        &:hover {
            color: lightGray;
        }
    }

    .logo_small {
        width: 40px;
        position: absolute;
        left: 50%;
        top: 0;
        transform: translate(-50%, -50%);

    }

}
</style>