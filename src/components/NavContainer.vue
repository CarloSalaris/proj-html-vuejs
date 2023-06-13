<script>
export default {
    name: 'NavContainer',
    props: {
        menuElements: Array,
        btnColor: String,
    },
}
</script>

<template>
    <div class="navContainer">

        <!-- LEFT BLOCK -->
        <div class="block">
            <!-- LOGO -->
            <div class="logo">
                <img src="../assets/images/icons/logo.png" alt="logo">
            </div>
            <!-- NAV MENU (ul) -->
            <ul>
                <li v-for="(element, idx) in menuElements" :class="element.active ? 'active' : ''" :key="idx">
                    <a href="#">
                        {{ element.name }}
                        <i v-if="element.dropdown" class="fa-solid fa-angle-down"></i>
                    </a>

                </li>
            </ul>
        </div>

        <!-- RIGHT BLOCK -->

        <div class="block">
            <!-- Link telephone number -->
            <div class="phoneLInk">
                <a href="#">
                    <i class="fa-solid fa-headphones"></i>
                    1.800.123.4567
                </a>
            </div>
            <!-- BUTTON (header: 1, footer: 3) -->
            <button :class="btnColor">
                Get a free consultation
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.navContainer {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;

    .block {
        display: flex;
        gap: 50px;
        align-items: center;
    }

    ul {
        margin-left: 60px;
        display: flex;
        gap: 25px;

        li {
            padding: 10px 0;

            i {
                margin-left: 5px;
                font-size: .8em;
            }
        }
    }

}
</style>