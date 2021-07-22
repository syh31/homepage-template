<template>
  <div class="container">
    <div class="navbar">
      <div class="navbar-header">
        <el-image class="navbar-brand" :src="require('../../assets/web_logo.png')" fit="contain"/>
      </div>
      <div class="navbar-nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" active-text-color="#1989FA"
                 :router="true">
          <el-menu-item index="/home">Home</el-menu-item>
          <el-menu-item index="/about">About</el-menu-item>
          <el-menu-item index="/courses" disabled>Courses</el-menu-item>
          <el-menu-item index="/price" disabled>Price</el-menu-item>
          <el-menu-item index="/contact" disabled>Contact</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    activeIndex: {
      get () {
        return this.$route.path
      },
      set (value) {
        this.$store.dispatch('setRoutePath', value)
      }
    }
  }
}
</script>

<style scoped>
.navbar {
  width: 1140px;
  height: 80px;
  border-bottom: 1px #E6E6E6 solid;
  margin: auto;
  display: flex;
}

.navbar-header {
  flex: 1;
}

.navbar-brand {
  margin-top: 10px;
  margin-left: 10px;
  height: 60px;
}

.navbar-nav {
  width: 500px;
}

.el-menu-demo {
  height: 100%;
}

.el-menu-item {
  height: 100%;
  line-height: 80px;
}
</style>
