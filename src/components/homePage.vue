<template>
  <div>
    <top-bar></top-bar>
    <logo-bar></logo-bar>
    <navbar></navbar>
    <app-main></app-main>
  </div>
</template>

<script>
import TopBar from './layout/topBar'
import LogoBar from './layout/logoBar'
import Navbar from './layout/Navbar'
import AppMain from './layout/AppMain'
export default {
  name: 'homePage',
  components: {AppMain, Navbar, LogoBar, TopBar}
}
</script>

<style scoped>

</style>
