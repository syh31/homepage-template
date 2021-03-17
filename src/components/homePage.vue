<template>
  <div>
    <top-bar></top-bar>
    <logo-bar></logo-bar>
    <navbar></navbar>
    <app-main></app-main>
    <Footer></Footer>
  </div>
</template>

<script>
import TopBar from './layout/topBar'
import LogoBar from './layout/logoBar'
import Navbar from './layout/Navbar'
import AppMain from './layout/AppMain'
import Footer from './layout/Footer'
export default {
  name: 'homePage',
  components: {Footer, AppMain, Navbar, LogoBar, TopBar}
}
</script>

<style scoped>

</style>
