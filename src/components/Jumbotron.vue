<script>
export default {
    name: 'Jumbotron',
}
</script>

<template>
    <div class="jumbo bg_blue">
        <!-- LEFT BLOCK -->
        <div class="container_centered">
            <div class="block">
                <!-- TITLE slogan -->
                <h1>
                    Independent professional who works remotely to help with your business.
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
                <img src="../assets/images/pics/info-5-600x666.jpg" alt="">


            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.jumbo {
    height: 700px;
    background-image: url("../assets/images/bg/home-bg-3.svg");
    background-repeat: no-repeat;
    background-size: cover;
}

.container_centered {
    display: flex;
    width: 85%;
}

.block {
    flex-basis: 55%;
    padding: 30px;
    margin-right: 60px;
    text-align: center;

    p {
        margin-bottom: 50px;
    }
}

.pic_container {

    img {
        border-radius: 10px;

    }
}
</style>