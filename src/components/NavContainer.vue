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
                <a href="#"><img src="../assets/images/icons/logo.png" alt="logo"></a>
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
            <div class="phoneLink">
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
    padding: 40px 0;
    display: flex;
    justify-content: space-between;
    font-weight: 600;


    .block {
        display: flex;
        gap: 50px;
        align-items: center;
    }

    .logo {
        width: 55px;
    }

    ul {
        margin-left: 30px;
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

    .phoneLink {
        a {
            font-size: .9rem;

            i {
                margin-right: 5px;
            }
        }
    }
}
</style>