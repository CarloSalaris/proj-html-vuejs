<script>
import { store } from "../store.js";
import NavContainer from './NavContainer.vue'

export default {
    name: 'PageHeader',
    components: {
        NavContainer,
    },
    data() {
        return {
            store,
        }
    },
    props: {
        navMenu: Array,
    }
}
</script>

<template>
    <header class="bg_blue">

        <NavContainer btnColor="btn_1" msg="NavContainer" :menuElements="store.vaPage.navElements" />

    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables';

header {
    padding: 0 60px;
    background-image: url("../assets/images/bg/header-bg.svg");
    background-size: cover;
    background-position: bottom;
}
</style>
