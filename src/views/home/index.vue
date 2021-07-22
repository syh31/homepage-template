<template>
  <div>
    <carousel/>
    <new-course/>
    <about-us/>
  </div>
</template>

<script>
import Carousel from './components/carousel'
import NewCourse from './components/newCourse'
import AboutUs from './components/aboutUs'

export default {
  name: 'index',
  components: {AboutUs, NewCourse, Carousel}
}
</script>
