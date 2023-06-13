<script>
import NavContainer from './NavContainer.vue'

export default {
    name: 'PageHeader',
    components: {
        NavContainer,
    },
    props: {
        msg: String,
    }
}
</script>

<template>
    <header> {{ msg }}

        <NavContainer msg="NavContainer" />

    </header>
</template>

<style lang="scss" scoped></style>
