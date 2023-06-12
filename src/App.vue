<script>
import PageHeader from './components/PageHeader.vue'
import PageMain from './components/PageMain.vue'
import PageFooter from './components/PageFooter.vue'


export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter,
  }
}
</script>

<template>
  <PageHeader msg="THIS IS THE HEADER" />

  <PageMain msg="THIS IS THE MAIN" />

  <PageFooter msg="THIS IS THE FOOTER" />
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
