<template>
  <div class="content">
    <el-carousel height="450px" :interval="6000">
      <el-carousel-item>
        <img style="height: 100%; width: 100%; object-fit: cover; " src="../../../assets/slides/img1.jpg"  alt=""/>
      </el-carousel-item>
      <el-carousel-item>
        <img style="height: 100%; width: 100%; object-fit: cover; " src="../../../assets/slides/img2.jpg"  alt=""/>
      </el-carousel-item>
      <el-carousel-item>
        <img style="height: 100%; width: 100%; object-fit: cover; " src="../../../assets/slides/img3.jpg"  alt=""/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'carousel'
}
</script>

<style scoped>
.content {
  width: 1140px;
  margin: auto;
}
</style>
