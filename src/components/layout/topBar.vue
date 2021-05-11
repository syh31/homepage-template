<template>
  <div class="top-bar">
    <div class="bgGrey">
      <el-row>
        <el-col :span="8">
          <span>欢迎来到大数据智能高考志愿填报平台</span>
        </el-col>
        <el-col :span="7"> &nbsp; </el-col>
        <el-col :span="9">
          <el-row>
            <el-col :span="4">
              <span class="login" @click="gotoLogin">登录</span>
            </el-col>
            <el-col :span="6">
              <span>高考志愿填报QQ群</span>
            </el-col>
            <el-col :span="4">
              <span>手机APP</span>
            </el-col>
            <el-col :span="5">
              <span>微信公众号</span>
            </el-col>
            <el-col :span="5">
              <span>志愿VIP卡激活</span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topBar',
  methods: {
    gotoLogin () {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.top-bar {
  width: 100vw;
  background-color: rgba(155, 155, 155, 0.3);
}

.bgGrey {
  height: 25px;
  width: 1190px;
  margin: 0 auto;
  font-size: 12px;
  line-height: 25px;
  padding: 0 10px;
}

.login {
  color: #409eff;
  cursor: pointer;
}

.login:hover {
  color: #0086F0;
}
</style>
