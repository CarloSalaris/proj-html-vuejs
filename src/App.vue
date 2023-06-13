<script>
import { store } from "./store.js";

import PageHeader from './components/PageHeader.vue'
import Jumbotron from './components/Jumbotron.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'


export default {
  components: {
    PageHeader,
    Jumbotron,
    PageMain,
    PageFooter,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <PageHeader />

  <Jumbotron :slogan="store.vaPage.slogan" />

  <PageMain msg="THIS IS THE MAIN" />

  <PageFooter :slogan="store.vaPage.slogan" />
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/variables';
</style>
