<template>
  <div>
    <title-bar/>
    <content-area/>
  </div>
</template>

<script>
import TitleBar from './components/TitleBar'
import ContentArea from './components/ContentArea'

export default {
  name: 'index',
  components: {ContentArea, TitleBar}
}
</script>

<style scoped>

</style>
