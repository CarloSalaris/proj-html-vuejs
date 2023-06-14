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
        <section>
            <div class="container_centered">
                <div class="servicesGrid">
                    <div class="services"> Available services</div>
                    <div class="servicesCards">
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
            </div>
        </section>
        <section id="learnMore" class="bg_blue">'Learn-more' section</section>
        <section>'brands' section</section>
    </main>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

section {
    min-height: 1000px;
}

//SERVICES SECTION

.services {
    color: $orange;
    padding: 25px 0;
    border-bottom: solid 2px $lightGray ;
}

.servicesCards {
    display: flex;


    .card {
        width: 25%;
        padding: 60px;
        border-right: solid 2px $lightGray;

        &:last-child {
            border-right: none;
        }
    }
}

#learnMore {
    background-image: url("../assets/images/bg/info-bg-3.svg"), url("../assets/images/bg/info-bg-2.svg");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom, top right;
}
</style>