<template>
  <div id="container">
    <div class="secondRow">
      <el-row class="logo-search">
        <el-col :span="6">
          <div class="logo">
            <el-image shape="square" :src="require('../../assets/logo.jpg')" class="img-logo"/>
            <span class="logo-title">考哪儿</span>
          </div>
        </el-col>
        <el-col :span="12" style="height: 90px; ">
          <div  style="position: relative; top: 50%; float: left; transform: translateY(-50%); ">
            <el-select
              v-model="selectProvince"
              placeholder="请选择报考省份"
              clearable
              class="selectProvinceStyle"
            >
              <el-option
                v-for="dict in provincesList"
                :key="dict"
                :label="dict"
                :value="dict"
              ></el-option>
            </el-select>
          </div>
          <div style="position: relative; top: 50%; float: right; transform: translateY(-50%); width: 330px; ">
            <el-input
              v-model="searchValue"
              placeholder="搜大学/查专业"
              suffix-icon="el-icon-search"
              class="search"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="6" style="height: 90px; ">
          <div class="desc">
            <span class="tishiOne">祝广大考生金榜提名</span>
            <span class="tishiTwo">开通VIP</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'logoBar',
  data () {
    return {
      selectProvince: '',
      searchValue: '',
      provincesList: []
    }
  }
}
</script>

<style scoped>
#container {
  width: 1190px;
  height: 90px;
  margin: 0 auto;
  padding: 0 10px;
}

.secondRow {
  height: 50px;
}

.secondRow .logo-search {
  margin-left: .2rem;
}

.secondRow .logo-search .search {
  margin-top: .1rem;
  width: 80%;
}

.secondRow .logo {
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: .8rem;
}

.secondRow .img-logo {
  height: 70px;
  width: 70px;
  margin-top: 10px;
  border-radius: 12px;
}

.secondRow .plateName {
  display: inline;
  margin-left: .15rem;
  font-size: .4rem;
  font-weight: 800;
}

.selectProvinceStyle {
  width: 100px;
}

.secondRow .desc {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.logo-title {
  font-size: 38px;
  font-family: '幼圆';
  font-weight: bold;
  background-image: -webkit-linear-gradient(bottom, red, #fd8403, yellow);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 5px 10px 0 10px;
}

.tishiOne {
  border: 1px solid red;
  color: rgb(235, 16, 16);
}

.tishiTwo {
  border: 1px solid red;
  background-color: red;
  color: white;
}
</style>
