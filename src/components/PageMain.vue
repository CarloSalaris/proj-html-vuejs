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
        <section>'Services' section</section>
        <section id="learnMore" class="bg_blue">'Learn-more' section</section>
        <section>'brands' section</section>
    </main>
</template>

<style lang="scss" scoped>
section {
    min-height: 1000px;
}

#learnMore {
    background-image: url("../assets/images/bg/info-bg-3.svg"), url("../assets/images/bg/info-bg-2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom, top right;
}
</style>