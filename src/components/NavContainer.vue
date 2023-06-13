<script>
export default {
    name: 'NavContainer',
    props: {
        menuElements: Array,
    },
}
</script>

<template>
    <div class="navContainer bg_blue">

        <!-- LEFT BLOCK -->
        <div>
            <!-- LOGO -->
            <div class="logo">
                <img src="" alt="">
            </div>
            <!-- NAV MENU (ul) -->
            <nav>
                <ul>
                    <li v-for="(element, idx) in menuElements" :key="idx">
                        <a href="#">{{ element.name }}</a>
                    </li>
                </ul>
            </nav>

        </div>

        <!-- RIGHT BLOCK -->
        <!-- Link telephone number -->
        <!-- BUTTON (header: 1, footer: 3) -->
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.navContainer {
    height: 100px;
    display: flex;
    gap: 40px;

    ul {
        display: flex;
        gap: 10px;
    }

}
</style>