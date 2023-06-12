<script>
export default {
    name: 'PageFooter',
    props: {
        msg: String,
    },
}
</script>

<template>
    <footer>
        {{ msg }}
    </footer>
</template>

<style lang="scss" scoped></style>