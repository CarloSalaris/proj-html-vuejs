<script>
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
  }
}
</script>

<template>
  <PageHeader msg="THIS IS THE HEADER" />

  <Jumbotron msg="THIS IS THE JUMBOTRON" />

  <PageMain msg="THIS IS THE MAIN" />

  <PageFooter msg="THIS IS THE FOOTER" />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
