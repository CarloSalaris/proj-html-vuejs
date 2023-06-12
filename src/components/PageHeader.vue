<script>
export default {
    name: 'PageHeader',
    props: {
        msg: String,
    }
}
</script>

<template>
    <header>
        {{ msg }}
    </header>
</template>

<style lang="scss" scoped></style>
