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

        <NavContainer msg="NavContainer" :menuElements="store.navMenu.elements" />

    </header>
</template>

<style lang="scss" scoped>
header {
    min-height: 185px;
    padding: 25px 80px 0;
    background-image: url("../assets/images/bg/header-bg.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
}
</style>
