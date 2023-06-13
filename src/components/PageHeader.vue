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
    <header>

        <NavContainer msg="NavContainer" :menuElements="store.navMenu.elements" />

    </header>
</template>

<style lang="scss" scoped></style>
