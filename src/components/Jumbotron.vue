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

        <!-- Fixed elements -->
        <div class="sideSquares">
            <!-- square -->
            <div class="sideSquare">
                <i class="fa-regular fa-folder-open"></i>
                <div>Demos</div>
            </div>
            <!-- square -->
            <div class="sideSquare">
                <div class="offer">$39</div>
                <div>On Sale</div>
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
    position: relative;
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

.sideSquares {
    position: fixed;
    top: 110px;
    right: 10px;

    .sideSquare {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 55px;
        height: 55px;
        background-color: #ffffff;
        color: $iconGray;
        padding: 5px;
        border: 1px solid;
        border-radius: 5px;
        margin-bottom: 5px;
        text-align: center;
        font-size: .7rem;
        cursor: pointer;

        i {
            font-size: 1.3rem;
        }

        .offer {
            color: $iconGreen;
            font-size: 1.2rem;
            font-weight: 500;
        }
    }
}
</style>