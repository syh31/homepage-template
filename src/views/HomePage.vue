<template>
  <div>
    <navbar/>
    <app-main/>
    <app-footer/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import AppMain from './components/AppMain'
import AppFooter from './components/AppFooter'

export default {
  name: 'HomePage',
  components: {AppFooter, AppMain, Navbar}
}
</script>

<style scoped>

</style>
