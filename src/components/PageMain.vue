<script>
export default {
    name: 'PageMain',
    props: {
    },
}
</script>

<template>
    <main>
        <!-- SERVICES SECTION -->
        <section>
            <div class="container_centered">

                <!-- GRID -->
                <div class="servicesGrid">
                    <div class="services"> Available services</div>
                    <div class="flexContainer">
                        <!-- card -->
                        <div class="card">
                            <h3>Answering phone calls</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odio</p>
                        </div>
                        <!-- card -->
                        <div class="card">
                            <h3>Basic data entry</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odio</p>
                        </div>
                        <!-- card -->
                        <div class="card">
                            <h3>Organizing calendar</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odio</p>
                        </div>
                        <!-- card -->
                        <div class="card">
                            <h3>Booking travels</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis odio</p>
                        </div>
                    </div>
                </div>

                <!-- IMAGE AND SIDE-TEXT BLOCK-->
                <div class="flexContainer">
                    <!-- image -->
                    <div class="pic_container">
                        <img src="../assets/images/pics/info-5-2x-800x864.png" alt="Section picture">
                    </div>
                    <!-- text block -->
                    <div class="side_text_block">
                        <img src="../assets/images/icons/icon-1-2x-200x155.png" alt="">
                        <h2>Find the ultimate virtual assistant for your business</h2>
                        <p>
                            Deleniti explicabo alias animi sequi officia, optio dolorem quibusdam! Excepturi omnis
                            dolores
                        </p>
                        <button class="btn_2">What is a VA exactly?</button>

                    </div>

                </div>
            </div>
        </section>

        <!-- LEARN-MORE SECTION -->
        <section id="learnMore" class="bg_blue">
            <div class="container_centered">
                <!-- Text and button -->
                <div class="text_button">
                    <p>Donec est tristique eu massa pellentesque.</p>
                    <h1>Highly-skilled, independent professional freelancer.</h1>
                    <button class="btn_2">What is a VA exactly?</button>
                </div>
                <!-- Card container -->
                <div class="flexContainer">
                    <!-- CARD -->
                    <div class="card">
                        <!-- Left side -->
                        <div>
                            <h3>1.</h3>
                        </div>
                        <!-- Right side -->
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio non senectus amet
                                consectetur.</p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>

                    <!-- CARD -->
                    <div class="card">
                        <!-- Left side -->
                        <div>
                            <h3>2.</h3>
                        </div>
                        <!-- Right side -->
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio non senectus amet
                                consectetur.</p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>

                    <!-- CARD -->
                    <div class="card">
                        <!-- Left side -->
                        <div>
                            <h3>3.</h3>
                        </div>
                        <!-- Right side -->
                        <div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio non senectus amet
                                consectetur.</p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>'brands' section</section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

section {
    min-height: 1000px;
}

//SERVICES SECTION

//GRID
.services {
    color: $orange;
    padding: 25px 0;
    border-bottom: solid 2px $lightGray ;
}

.servicesGrid {
    margin-bottom: 100px;

    .card {
        width: 25%;
        padding: 60px;
        border-right: solid 2px $lightGray;

        &:last-child {
            border-right: none;
        }
    }
}

//IMAGE + SIDE-TEXT
.side_text_block {
    flex-basis: 60%;
    text-align: center;
    padding: 50px;
    margin: 0 20px;

    &>* {
        margin-bottom: 30px;
    }
}

//  "LEARN MORE" SECTION
#learnMore {
    background-image: url("../assets/images/bg/info-bg-3.svg"), url("../assets/images/bg/info-bg-2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom, top right;
    padding: 100px 0;

    .text_button {
        width: 80%;
        margin: auto;
        text-align: center;
        margin-bottom: 50px;

        &>* {
            margin-bottom: 40px;
        }
    }

    .flexContainer {
        gap: 50px;

        // CARDS
        .card {
            background-color: $darkBlue;
            padding: 50px;
            border-radius: 5px;
            display: flex;
            gap: 50px;

            & * {
                margin-bottom: 30px;
            }

            p {
                font-size: 1.3rem;
                padding-top: 10px;
            }

            a {
                color: $orange;
                text-decoration: underline;
            }
        }
    }
}
</style>