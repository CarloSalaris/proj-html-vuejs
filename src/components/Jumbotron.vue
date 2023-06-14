<script>
export default {
    name: 'Jumbotron',
    props: {
        slogan: String,
    }
}
</script>

<template>
    <div class="jumbo bg_blue">
        <!-- LEFT BLOCK -->
        <div class="container_centered">
            <div class="block">
                <!-- TITLE slogan -->
                <h1>
                    {{ slogan }}
                </h1>
                <!-- description paragraph -->
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    <br>Nam maxime unde cupiditate praesentium.
                </p>
                <!-- BUTTON 1 -->
                <button class="btn_1">
                    What is a VA exactly?
                </button>
            </div>

            <!-- RIGHT BLOCK -->
            <div class="pic_container">
                <!-- IMAGE - Bottom out of background -->
                <img src="../assets/images/pics/info-5-800x887.jpg" alt="">


            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.jumbo {
    height: 550px;
    background-image: url("../assets/images/bg/home-bg-3.svg");
    background-size: cover;
    background-position: center;
}

.container_centered {
    display: flex;
    width: 85%;
    padding: 0 40px;
}

.block {
    flex-basis: 55%;
    padding: 50px 15px;
    margin-right: 85px;
    text-align: center;

    p {
        margin-bottom: 50px;
    }
}

.pic_container {
    width: 45%;
    max-height: 570px;
}
</style>