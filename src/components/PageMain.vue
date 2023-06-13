<script>
export default {
    name: 'PageMain',
    props: {
        msg: String,
    },
}
</script>

<template>
    <main>
        {{ msg }}
        <section>'Services' section</section>
        <section>'Learn-more' section</section>
        <section>'brands' section</section>
    </main>
</template>

<style lang="scss" scoped></style>