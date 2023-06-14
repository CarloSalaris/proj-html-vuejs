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

            <!-- FIXED DIV FOR BACKGROUND -->
            <div id="orangeFixed"></div>

            <div class="container_centered">

                <!-- GRID -->
                <div class="servicesGrid">
                    <div class="services"> Available services</div>
                    <div class="flexContainer">
                        <!-- card -->
                        <div class="serviceCard">
                            <h4>Answering phone calls</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <!-- card -->
                        <div class="serviceCard">
                            <h4>Basic data entry</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <!-- card -->
                        <div class="serviceCard">
                            <h4>Organizing calendar</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                        <!-- card -->
                        <div class="serviceCard">
                            <h4>Booking travels</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                </div>

                <!-- IMAGE AND SIDE-TEXT BLOCK-->
                <div class="flexContainer">
                    <!-- image -->
                    <div class="pic_container">
                        <img src="../assets/images/pics/info-5-2x.png" alt="Section picture">
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
        <section id="learnMoreSection" class="bg_blue">
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

        <!-- BRANDS SECTION -->
        <section id="brandSection">
            <div class="container_centered">
                <!-- List of brands -->
                <div class="brands">
                    <p>Trusted by these amazing brands</p>
                    <div class="flexContainer">
                        <a href=""><img src="../assets/images/brands/brand-1.jpg" alt="brand"></a>
                        <a href=""><img src="../assets/images/brands/brand-7.jpg" alt="brand"></a>
                        <a href=""><img src="../assets/images/brands/brand-3.jpg" alt="brand"></a>
                        <a href=""><img src="../assets/images/brands/brand-4.jpg" alt="brand"></a>
                        <a href=""><img src="../assets/images/brands/brand-5.jpg" alt="brand"></a>
                    </div>
                </div>

                <!-- IMAGE AND SIDE-TEXT BLOCK-->
                <div class="flexContainer flexReverse">
                    <!-- image -->
                    <div class="pic_container">
                        <img src="../assets/images/pics/info-8-2x-600x610.png" alt="Section picture">
                    </div>
                    <!-- text block -->
                    <div class="side_text_block">
                        <img src="../assets/images/icons/icon-2-2x-200x127.png" alt="">
                        <h2>Professional who works to help with your business.</h2>
                        <p>
                            Deleniti explicabo alias animi sequi officia, optio dolorem quibusdam! Excepturi omnis
                            dolores
                        </p>
                        <button class="btn_2">
                            What is a VA exactly?
                        </button>

                    </div>

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
                            <h5>Learn to delegate</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio non senectus amet sit amet
                                consectetur adipisicing elit. Optio non senectus amet consectetur.</p>
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
                            <h5>Reduce labor cost</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio non senectus amet sit amet
                                consectetur adipisicing elit. Optio non senectus amet consectetur.</p>
                            <a href="#">Learn more</a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

//SERVICES SECTION

section {
    position: relative;
}

#orangeFixed {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(50%, -50%);
    width: 180px;
    height: 180px;
    background-color: $orange;
    border-radius: 50%;
}

//GRID
.services {
    color: $orange;
    padding: 25px 0;
    border-bottom: solid 2px $lightGray ;
    font-weight: 500;
}

.servicesGrid {
    margin-bottom: 100px;

    .flexContainer {
        gap: 0;
    }

    .serviceCard {
        width: 25%;
        padding: 50px;
        border-right: solid 2px $lightGray;

        p {
            font-size: 1.1rem;
        }

        &:last-child {
            border-right: none;
        }
    }
}

//IMAGE + SIDE-TEXT

.pic_container {
    width: 50%;
}

.side_text_block {
    flex-basis: 50%;
    text-align: center;
    padding: 50px 32px;
    // margin: 0 10px;

    img {
        width: 150px;
    }

    p {
        font-size: 1.1rem;
    }

    &>* {
        margin-bottom: 30px;
    }
}

//  "LEARN MORE" SECTION
#learnMoreSection {
    background-image: url("../assets/images/bg/info-bg-3.svg"), url("../assets/images/bg/info-bg-2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom, top right;
    padding: 65px 0;

    .text_button {
        width: 80%;
        margin: auto;
        text-align: center;
        margin-bottom: 50px;

        &>* {
            margin-bottom: 40px;
        }
    }
}

.flexContainer {
    gap: 45px;

    // CARDS
    .card {
        background-color: $darkBlue;
        color: #ffffff;
        padding: 40px 50px;
        border-radius: 5px;
        display: flex;
        gap: 35px;

        h3 {
            text-align: center;
        }

        p {
            font-size: 1rem;
            padding-top: 10px;
            margin-bottom: 30px;
        }

        a {
            color: $orange;
            text-decoration: underline;
        }
    }
}

// BRANDS SECTION
#brandSection {
    padding: 60px 0;

    .brands {
        text-align: center;
        margin-bottom: 100px;

        p {
            color: $orange;
        }
    }

    .flexContainer.flexReverse {
        margin-bottom: 100px;
    }

    .card {
        padding: 60px 50px;
        background-color: $blue;

        &:first-child {
            background-image: url("../assets/images/bg/box-bg-1.svg");
            background-position: bottom;
            background-size: cover;
        }

        &:last-child {
            background-image: url("../assets/images/bg/box-bg-2.svg");
            background-position: top;
            background-size: cover;
        }
    }
}
</style>