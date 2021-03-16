<template>
  <div style="width: 100%; background-color: #e84c33; ">
    <div id="container">
      <el-menu
        :default-active="activeIndex2"
        mode="horizontal"
        @select="handleSelect"
        background-color="#e84c33"
        text-color="#fff"
        active-text-color="#fff">
        <el-menu-item index="1" @click="goToHome">首页</el-menu-item>
        <el-menu-item index="2" @click="goToSchool">院校优先</el-menu-item>
        <el-menu-item index="3">专业优先</el-menu-item>
        <el-menu-item index="4">志愿表</el-menu-item>
        <el-menu-item index="5">志愿VIP</el-menu-item>
        <el-menu-item index="6">1V1专家</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    goToHome () {
      this.$router.push('/home')
    },
    goToSchool () {
      this.$router.push('/school')
    }
  }
}
</script>

<style scoped>
#container {
  width: 1190px;
  margin: 0 auto;
  padding: 0 10px;
}

.el-menu {
  height: 40px;
}

.el-menu-item {
  height: 40px;
  line-height: 40px;
}

/deep/ .el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 40px;
  line-height: 40px;
}
</style>
