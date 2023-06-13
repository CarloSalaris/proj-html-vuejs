<script>
import NavContainer from './NavContainer.vue'

export default {
    name: 'PageFooter',
    components: {
        NavContainer,
    },
    props: {
        msg: String,
    },
}
</script>

<template>
    {{ msg }}
    <NavContainer msg="NavContainer" />

    <!-- LEFT BLOCK -->
    <!-- TITLE slogan -->
    <!-- BUTTON 1 -->
    <!-- Copyright -->
</template>

<style lang="scss" scoped></style>