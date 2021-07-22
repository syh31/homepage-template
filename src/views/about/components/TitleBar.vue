<template>
  <div class="container">
    <div class="content">
      <div class="title">About Us</div>
      <div class="subtitle">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing eliras scele!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TitleBar'
}
</script>

<style scoped>
.container {
  background-color: #3d84e6;
  padding: 10px 0;
}

.content {
  width: 1140px;
  margin: auto;
}

.title {
  font-size: 36px;
  font-family: 'Oswald', sans-serif;
  padding: 30px 0 10px 0;
  text-align: center;
  color: white;
}

.subtitle {
  text-align: center;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  color: white;
  font-weight: 300;
}

.subtitle p {
  margin: 0 0 20px 0;
}
</style>
